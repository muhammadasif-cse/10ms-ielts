"use client";
import React from "react";
import Logo from "./logo";
import Items from "./items";
import SearchInput from "../ui/search-input/search-input";
import { suggestions } from "../ui/search-input/constant";
import LocaleSwitcher from "@/app/[locale]/components/ui/button/locale-switcher";
import Phone from "../ui/button/phone";
import PrimaryButton from "../ui/button/primary-button";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("authentication");
  const p = useTranslations("placeholder");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };
  const handleClear = () => {
    console.log("Search cleared");
  };

  return (
    <nav className="container flex items-center justify-between gap-3 p-3 md:px-7">
      <div className="flex shrink-0 items-center gap-3">
        <button
          title="Menu toggle"
          className="xl:hidden cursor-pointer shrink-0"
          type="button"
          name="menu-toggle"
        >
          <svg
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
          </svg>
        </button>
        <Logo className="w-[100px] h-[27px]" />
      </div>
      <SearchInput
        className="w-full sm:block hidden"
        placeholder={p("search")}
        suggestLabel={p("title")}
        suggestions={suggestions}
        showSuggestions={true}
        onSearch={handleSearch}
        onClear={handleClear}
        debounceMs={500}
      />
      <div className="flex items-center gap-3">
        <Items />
        <LocaleSwitcher />
        <Phone number={16910} />
        <PrimaryButton>{t("login.title")}</PrimaryButton>
      </div>
    </nav>
  );
}
