import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <section className="flex justify-start align-middle gap-7">
      <Link
        href="https://www.instagram.com/21_tarot_and_coffee/"
        target="_blank"
      >
        <FaInstagram className="text-pink_sid text-5xl hover:bg-pink_sid animate-button" />
      </Link>
      <Link href="https://www.instagram.com/lauras_21_cakes/" target="_blank">
        <FaInstagram className="text-green_sid text-5xl hover:bg-green_sid animate-button" />
      </Link>
    </section>
  );
}
