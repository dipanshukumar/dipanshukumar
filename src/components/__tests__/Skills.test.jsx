import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Skills from "../Skills";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
}));

describe("Skills Component", () => {
    it("renders the section title", () => {
        render(<Skills />);
        expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
    });

    it("renders skill categories", () => {
        render(<Skills />);
        expect(screen.getByText("Languages & Frameworks")).toBeInTheDocument();
        expect(screen.getByText("Frontend & Styling")).toBeInTheDocument();
        expect(screen.getByText("Tools & Platforms")).toBeInTheDocument();
        expect(screen.getByText("Testing & Methodologies")).toBeInTheDocument();
    });

    it("renders specific skills", () => {
        render(<Skills />);
        expect(screen.getByText("JavaScript (ES6+)")).toBeInTheDocument();
        expect(screen.getByText("React.js")).toBeInTheDocument();
        expect(screen.getByText("SCSS")).toBeInTheDocument();
        expect(screen.getByText("Git/GitHub")).toBeInTheDocument();
        expect(screen.getByText("Jest")).toBeInTheDocument();
    });
});
