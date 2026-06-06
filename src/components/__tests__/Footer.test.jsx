import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "../Footer";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
    },
}));

describe("Footer Component", () => {
    it("renders the developer name", () => {
        render(<Footer />);
        expect(screen.getByText("Dipanshu Kumar")).toBeInTheDocument();
    });

    it("renders quick links", () => {
        render(<Footer />);
        expect(screen.getByText("Quick Links")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders copyright with current year", () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it("renders social links", () => {
        render(<Footer />);
        expect(screen.getByLabelText(/Visit GitHub profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toBeInTheDocument();
    });
});
