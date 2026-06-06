import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "../Navbar";
import { ThemeProvider } from "../../context/ThemeContext";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
        header: ({ children, ...props }) => <header {...props}>{children}</header>,
        nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

const renderWithTheme = (ui) => {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Navbar Component", () => {
    it("renders the logo", () => {
        renderWithTheme(<Navbar />);
        expect(screen.getByText("Portfolio")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        renderWithTheme(<Navbar />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Skills")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("toggles the theme when theme button is clicked", () => {
        renderWithTheme(<Navbar />);
        const themeToggle = screen.getByLabelText(/switch to/i);
        fireEvent.click(themeToggle);
        expect(screen.getByLabelText(/switch to light mode/i)).toBeInTheDocument();
    });

    it("toggles the mobile menu", () => {
        renderWithTheme(<Navbar />);
        const menuToggle = screen.getByLabelText(/open navigation menu/i);
        fireEvent.click(menuToggle);
        expect(screen.getByLabelText(/close navigation menu/i)).toBeInTheDocument();
    });
});
