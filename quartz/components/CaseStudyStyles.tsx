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
      margin-left: 2rem;
      padding: 0.8em 0.75em 0.8em 0;
      font-size: 1rem;
      border-bottom: 1px dashed var(--lightgray);
    }

    .cs-finding-label {
      font-weight:700;
      font-style: italic;
      text-transform: title-case;
      color: var(--tertiary);
    }

    .cs-findings ul {
        list-style: disc;
        padding-left: 1.25rem;
        display: block;
    }

    .cs-findings ul li {
        display: list-item;
        border-bottom: none;
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

