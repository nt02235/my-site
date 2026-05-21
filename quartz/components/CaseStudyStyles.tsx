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
      grid-template-columns: 140px 1fr;
      gap: 1.5rem;
      padding: 1rem 0;
      font-size: 1rem;
      color: #4a4748;
      border-top: 1px dotted rgba(50, 47, 52, 0.15);
    }

    .cs-finding-label {
      font-weight: 700;
      text-transform: uppercase;
      color: #322f34;
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

