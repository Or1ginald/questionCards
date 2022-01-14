type passwordRequestFormType = {
  email: string;
  from: string;
  message: string;
};

export const passwordRequestForm = (
  userEmail: string,
  frontAddress: string,
): passwordRequestFormType => ({
  email: userEmail,
  from: frontAddress,
  message: `
    <div
      style="
        background-color: #a8d5c9;
        margin: 30px auto;
        border: 1px solid black;
        border-radius: 10px;
        padding: 15px;
        text-align: center;
      "
    >
      Password Recovery Link:
      <a
        href="https://or1ginald.github.io/questionCards/#/createNewPassword/$token$"
        >Click Here</a
      >`,
});
