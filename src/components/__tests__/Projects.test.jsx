import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Projects from "../Projects";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
}));

const mockProjects = {
    projects: [
        {
            id: 1,
            title: "Test Project",
            description: "Test Description",
            image: "/test.jpg",
            liveUrl: "https://test.com",
            technologies: ["React", "Vitest"],
            featured: true,
        },
    ],
};

describe("Projects Component", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("renders loading state initially", () => {
        // Mock fetch to be pending
        global.fetch = vi.fn().mockReturnValue(new Promise(() => { }));
        render(<Projects />);
        expect(screen.getByText(/Loading projects.../i)).toBeInTheDocument();
    });

    it("renders projects after successful fetch", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockProjects),
        });

        render(<Projects />);

        await waitFor(() => {
            expect(screen.getByText("Test Project")).toBeInTheDocument();
        });
        expect(screen.getByText("Test Description")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("renders error state when fetch fails", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
        });

        render(<Projects />);

        await waitFor(() => {
            expect(screen.getByText(/Error loading projects/i)).toBeInTheDocument();
        });
    });
});
