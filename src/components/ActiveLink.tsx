import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({children, shouldMatchExactHref, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const exactMatchOfHref = (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) || asPath.startsWith(String(rest.as));
  const notExactMatchOfHref = shouldMatchExactHref && (asPath === rest.href || asPath === rest.as);
  let isActive = exactMatchOfHref || notExactMatchOfHref || false;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
