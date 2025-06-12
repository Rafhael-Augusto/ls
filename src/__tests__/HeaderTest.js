import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header/header";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test("clica no botão Entrar", async () => {
  render(<Header />);

  const entrarButton = screen.getByRole("button", { name: /entrar/i });

  await userEvent.click(entrarButton);
});

test("clica no botão Ajuda", async () => {
  render(<Header />);

  const ajudaButton = screen.getByRole("button", { name: /ajuda/i });

  await userEvent.click(ajudaButton);
});
