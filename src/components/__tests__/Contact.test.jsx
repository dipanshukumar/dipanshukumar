import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "../Contact";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
    },
}));

// Mock emailjs
vi.mock("emailjs-com", () => {
    const mockInit = vi.fn();
    const mockSend = vi.fn().mockResolvedValue({ status: 200 });
    return {
        init: mockInit,
        send: mockSend,
        default: {
            init: mockInit,
            send: mockSend,
        },
    };
});

describe("Contact Component", () => {
    it("renders contact information", () => {
        render(<Contact />);
        expect(screen.getByText("Get In Touch")).toBeInTheDocument();
        expect(screen.getByText("dipanshukumar93@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("+91 87095 92699")).toBeInTheDocument();
    });

    it("updates form fields on input change", () => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText(/your name/i);
        const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });

        expect(nameInput.value).toBe("John Doe");
        expect(emailInput.value).toBe("john@example.com");
    });

    it("renders social links", () => {
        render(<Contact />);
        expect(screen.getByLabelText(/Visit GitHub profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toBeInTheDocument();
    });
});
