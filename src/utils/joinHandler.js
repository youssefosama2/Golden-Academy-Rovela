import Swal from "sweetalert2";
import i18next from "i18next";

export const handleJoin = (data = {}) => {
  const {
    plan = "غير محدد",
    type = "join",
  } = data;

  Swal.fire({
    title:
      type === "trial"
        ? i18next.t("join.trial_title")
        : i18next.t("join.join_title"),

    customClass: {
      popup: "swal2-rtl",
    },

    html: `
      <input
        type="text"
        id="swal-name"
        class="swal2-input"
        placeholder="${i18next.t("join.name_placeholder")}"
        dir="rtl"
      >

      <input
        type="number"
        id="swal-age"
        class="swal2-input"
        placeholder="${i18next.t("join.age_placeholder")}"
        dir="rtl"
      >

      <input
        type="tel"
        id="swal-phone"
        class="swal2-input"
        placeholder="${i18next.t("join.phone_placeholder")}"
        dir="rtl"
      >
    `,

    confirmButtonText: i18next.t("join.send"),
    focusConfirm: false,

    preConfirm: () => {
      const name = document.getElementById("swal-name").value.trim();
      const age = document.getElementById("swal-age").value.trim();
      const phone = document.getElementById("swal-phone").value.trim();

      if (!name || !age || !phone) {
        Swal.showValidationMessage(i18next.t("join.error_msg"));
        return false;
      }

      return { name, age, phone };
    },
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { name, age, phone } = result.value;

    // رقم أكاديمية جولدن
    const academyPhone = "201060442491";

    const message =
      `${i18next.t("join.wa_request")}\n\n` +
      `*${i18next.t("join.wa_name")}:* ${name}\n` +
      `*${i18next.t("join.wa_age")}:* ${age}\n` +
      `*${i18next.t("join.wa_phone")}:* ${phone}\n` +
      `*${i18next.t("join.wa_plan")}:* ${plan}`;

    window.open(
      `https://wa.me/${academyPhone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
};