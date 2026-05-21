import { QuartzComponentConstructor } from "./types"

export default (() => {
  function CaseStudyStyles() {
    return <></>
  }

  CaseStudyStyles.css = `

    .cs-findings {
      list-style: none;
    }

    .cs-findings li {
      display: grid;
      grid-template-columns: 25% 1fr;
      gap: 1.5rem;
      padding: 0.8em 0.75em;
      font-size: 1rem;
      color: #4a4748;
      border-top: 1px dotted rgba(50, 47, 52, 0.15);
    }

    .cs-finding-label {
      font-size: 1.15em;
      font-weight: 700;
      text-transform: title-case;
      color: #322f34;
    }

    .cs-findings ul {
        list-style: disc;
        padding-left: 1.25rem;
        display: block;
    }

    .cs-findings ul li {
        display: list-item;
        border-top: none;
        padding: 0;
        grid-template-columns: unset;

    }
    
    @media (max-width: 500px) {
      .cs-findings li {
        grid-template-columns: 1fr;
        gap: 0.25rem;
      }
    }
  `

  return CaseStudyStyles
}) satisfies QuartzComponentConstructor

