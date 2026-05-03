import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import ChiensList from "../components/ChiensList/ChiensList";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Fiche from "../components/Fiche/Fiche";
import DemandesList from "../components/DemandesList/DemandesList";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
describe('Tests de render unitaires', () => {
    it('Render ChiensList (version En vedette)', () => {
        render(<ChiensList title="En vedette"/>);
        expect(screen.getByText("En vedette")).toBeInTheDocument();
    });

    it('Render Footer', () => {
        render(<Footer/>);
        expect(screen.getByText("Coordonnées")).toBeInTheDocument();
    });
    it('Render LoginForm', () => {
        render(
            <MemoryRouter>
                <LoginForm/>
            </MemoryRouter>);
        expect(screen.getByText("Pseudonyme")).toBeInTheDocument();
    });
});


describe('Tests de render intégration', () => {
    it('Render Header et tous les NavLinks', () => {
        const mockAuthContextLoggedIn = {
            isLoggedIn: false,
            login: vi.fn(),
            logout: vi.fn(),
        }

        render(
            <AuthContext value={mockAuthContextLoggedIn}>
                <MemoryRouter>
                    <Header/>
                </MemoryRouter>
            </AuthContext>
        );

        expect(screen.getByText("Login")).toBeInTheDocument();
        expect(screen.getByText("Acceuil")).toBeInTheDocument();
    });

    it('Render ChiensList et ChienCard en contexte logged in', () => {
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



