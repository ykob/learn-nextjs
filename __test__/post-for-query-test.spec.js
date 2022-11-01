import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PostForQueryTest from "../pages/posts/post-for-query-test";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("post for query test", () => {
  it("query.id is 'hogefuga'", async () => {
    useRouter.mockImplementation(() => ({
      isReady: true,
      query: {
        id: "hogefuga",
      },
    }));

    const { getByText } = render(<PostForQueryTest />);

    expect(getByText("hogefuga")).toBeInTheDocument();
  });

  it("query.id is undefined", () => {
    useRouter.mockImplementation(() => ({
      isReady: true,
      query: {},
    }));

    const { getByText } = render(<PostForQueryTest />);

    expect(getByText("fuga")).toBeInTheDocument();
  });
});
