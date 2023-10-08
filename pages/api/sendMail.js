import sendMail from "@/utils/sendMail";

export default async (req, res) => {
  const { email, subject, text } = req.body;

  try {
    await sendMail(email, subject, text);
    res.status(200).json({
      message: "Email sent Successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Error sending email" });
  }
};
