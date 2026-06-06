import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import About from "../About";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        header: ({ children, ...props }) => <header {...props}>{children}</header>,
        article: ({ children, ...props }) => <article {...props}>{children}</article>,
        figure: ({ children, ...props }) => <figure {...props}>{children}</figure>,
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
}));

describe("About Component", () => {
    it("renders the section title", () => {
        render(<About />);
        expect(screen.getByText("About Me")).toBeInTheDocument();
    });

    it("renders professional summary", () => {
        render(<About />);
        expect(screen.getByText(/Senior Frontend Developer/i)).toBeInTheDocument();
    });

    it("renders statistics", () => {
        render(<About />);
        expect(screen.getByText("6+")).toBeInTheDocument();
        expect(screen.getByText("Years of Experience")).toBeInTheDocument();
    });

    it("contains the download resume button", () => {
        render(<About />);
        expect(screen.getByLabelText(/download resume/i)).toBeInTheDocument();
    });

    it("calls download function when button is clicked", () => {
        const appendChildSpy = vi.spyOn(document.body, "appendChild");
        const removeChildSpy = vi.spyOn(document.body, "removeChild");

        render(<About />);
        const downloadBtn = screen.getByLabelText(/download resume/i);
        fireEvent.click(downloadBtn);

        expect(appendChildSpy).toHaveBeenCalled();
        expect(removeChildSpy).toHaveBeenCalled();

        appendChildSpy.mockRestore();
        removeChildSpy.mockRestore();
    });
});
