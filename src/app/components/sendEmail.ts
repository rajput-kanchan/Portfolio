"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../utils/constant";

const resend = new Resend("re_FMoFoVrm_3Pfh91NHwz9xgDG2gEoD344P");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "New Message <onboarding@resend.dev>",
      to: "kancrajp@gmail.com",
      subject: subject as string,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: any) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
