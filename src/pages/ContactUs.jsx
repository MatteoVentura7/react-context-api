import { useEffect } from "react";
import { useAlertContext } from "../contexts/AlertContext";
export default function ContactUs() {
  const { setAlertData } = useAlertContext();
  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Se chiami entro oggi avrai il 40% di sconto",
    });
  }, [setAlertData]);
  return (
    <>
      <h1>Contact us</h1>
    </>
  );
}
