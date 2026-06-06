import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "../Hero";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
        nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
    },
}));

describe("Hero Component", () => {
    it("renders the hero title and subtitle", () => {
        render(<Hero />);
        expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
        expect(screen.getByText(/Dipanshu Kumar/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Senior Frontend Developer & Software Engineer/i)
        ).toBeInTheDocument();
    });

    it("renders social media links", () => {
        render(<Hero />);
        expect(screen.getByLabelText(/github profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/linkedin profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email contact/i)).toBeInTheDocument();
    });

    it("renders action buttons", () => {
        render(<Hero />);
        expect(screen.getByLabelText(/view my projects/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/get in touch/i)).toBeInTheDocument();
    });
});
