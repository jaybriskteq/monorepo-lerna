import { websiteTitle } from "@monorepo/utils";

export const Header = () => {
    const headerEl = document.createElement('div');

    const titleEl = document.createElement('div');
    titleEl.innerText = websiteTitle('Awesome Website')
    headerEl.appendChild(titleEl);

    return headerEl;
}