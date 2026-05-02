import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import ChiensList from "../components/ChiensList/ChiensList";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe('Tests de render', () => {
    it('Render ChiensList (version En vedette)', () => {
        render(<ChiensList title="En vedette"/>);
        expect(screen.getByText("En vedette")).toBeInTheDocument();
    });

    it('Render ChiensList en contexte logged in', () => {
        const mockAuthContextLoggedIn = {
            isLoggedIn: true,
            login: vi.fn(),
            logout: vi.fn(),
        }

        render(
            <AuthContext value={mockAuthContextLoggedIn}>
                <MemoryRouter>
                    <ChiensList title="Âge d'or"/>
                </MemoryRouter>
            </AuthContext>
        );
        const boutons = screen.getAllByText("Voir");
        expect(boutons.length).toBeGreaterThan(0)
    });
});

/**describe('Tests apis', () => {
    it('Get all data', () => {
        render(<ChiensList title="En vedette"/>);
        expect(screen.getByText("En vedette")).toBeInTheDocument();
    });

}); **/




