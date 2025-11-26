import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Input", async () => {
    render(<PostComment />);
    const user = userEvent.setup();

    const textarea = screen.getByTestId("area-dataid");
    const button = screen.getByTestId("btn-dataid");

    await user.type(textarea, "Comentario1");
    await user.click(button);

    await user.type(textarea, "Comentario2");
    await user.click(button);

    const comments = screen.getAllByTestId("p-dataid");

    expect(comments[0].innerHTML).toContain("Comentario1");
    expect(comments[1].innerHTML).toContain("Comentario2");
  });
});
