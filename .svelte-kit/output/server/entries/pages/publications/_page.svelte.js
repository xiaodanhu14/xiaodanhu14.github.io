import { $ as head, V as ensure_array_like, W as attr } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
const publications = [
  {
    year: 2025,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Alexander Plopski, Marcus Thompson, Valmen Lapaja, Joshua McElroy, Anton Langitsch",
    title: "X-Mask: Improving Soft-Edge Occlusion in Optical See-Through Displays with Cross-Shaped Pinholes",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), to appear",
    links: {
      conference: "#",
      pdf: "#",
      project: "#"
    }
  },
  {
    year: 2024,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Alexander Plopski",
    title: "Perception-Driven Soft-Edge Occlusion for Optical See-Through Head-Mounted Displays",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    links: {
      journal: "#",
      pdf: "#",
      ieee: "#"
    }
  },
  {
    year: 2024,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Yuta Itoh, Tomoya Fukura, Takumi Yamamoto",
    title: "VideoSeeThrough: Rethinking Color Correction for Optical See-Through Head-Mounted Displays",
    venue: "Proceedings of the IEEE Virtual Reality and 3D User Interfaces Conference (IEEE VR)",
    links: {
      conference: "#",
      pdf: "#",
      video: "#"
    }
  },
  {
    year: 2024,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa",
    title: "Depth-Based Rendering for Static Occlusion in Diminished Reality",
    venue: "Proceedings of the International Conference on Virtual Reality and Visualization (ICVRV)",
    links: {
      conference: "#",
      pdf: "#"
    }
  },
  {
    year: 2023,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Yuta Itoh, Tomoya Fukura",
    title: "Perceptual Impact of Temporal Resolution on See-Through Video Quality in Augmented Reality Displays",
    venue: "Proceedings of the ACM SIGGRAPH Asia",
    links: {
      conference: "#",
      pdf: "#",
      video: "#"
    }
  },
  {
    year: 2022,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Yuta Itoh",
    title: "Real-Time Occlusion Aware Display for Optical See-Through Head-Mounted Devices",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
    links: {
      conference: "#",
      pdf: "#",
      demo: "#"
    }
  },
  {
    year: 2022,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa",
    title: "Color Consistency Framework for Optical See-Through Mixed Reality",
    venue: "Proceedings of the ACM Symposium on Virtual Reality Software and Technology (VRST)",
    links: {
      conference: "#",
      pdf: "#"
    }
  },
  {
    year: 2021,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Yuta Itoh",
    title: "Motion-Responsive Diminished Reality with Imperceptible Latency for Mixed Reality Displays",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
    links: {
      conference: "#",
      pdf: "#",
      video: "#"
    }
  },
  {
    year: 2021,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa",
    title: "Depth-Based Display for Occlusion Processing in Mixed Reality Environments",
    venue: "Proceedings of the ACM Symposium on Virtual Reality Software and Technology (VRST)",
    links: {
      conference: "#",
      pdf: "#"
    }
  },
  {
    year: 2021,
    authors: "Xiaodan Hu, Kiyoshi Kiyokawa, Yuta Itoh, Takumi Yamamoto",
    title: "Real-Time Light Field Processing for Augmented Reality Occlusion Rendering",
    venue: "Proceedings of the ACM SIGGRAPH Asia Emerging Technologies",
    links: {
      conference: "#",
      pdf: "#",
      demo: "#"
    }
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const publicationsByYear = publications.reduce(
      (acc, pub) => {
        if (!acc[pub.year]) {
          acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
      },
      {}
    );
    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Publications - Xiaodan Hu</title>`);
      });
    });
    $$renderer2.push(`<div class="publication-list svelte-1ix0gvc"><!--[-->`);
    const each_array = ensure_array_like(sortedYears);
    for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
      let year = each_array[$$index_2];
      $$renderer2.push(`<h3 class="year-header svelte-1ix0gvc">${escape_html(year)}</h3> <!--[-->`);
      const each_array_1 = ensure_array_like(publicationsByYear[year]);
      for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
        let pub = each_array_1[$$index_1];
        $$renderer2.push(`<div class="pub-item svelte-1ix0gvc"><div class="pub-authors svelte-1ix0gvc">${escape_html(pub.authors)}</div> <div class="pub-title svelte-1ix0gvc">${escape_html(pub.title)}</div> <div class="pub-venue svelte-1ix0gvc">${escape_html(pub.venue)}</div> <div class="pub-links svelte-1ix0gvc"><!--[-->`);
        const each_array_2 = ensure_array_like(Object.entries(pub.links));
        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
          let [type, url] = each_array_2[$$index];
          if (type === "conference" || type === "journal") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-external-link-alt svelte-1ix0gvc"></i> ${escape_html(type === "conference" ? "Conference" : "Journal")}</a>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (type === "pdf") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-file-pdf svelte-1ix0gvc"></i> PDF</a>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (type === "video") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-play svelte-1ix0gvc"></i> Video</a>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (type === "demo") {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-desktop svelte-1ix0gvc"></i> Demo</a>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (type === "ieee") {
                    $$renderer2.push("<!--[-->");
                    $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-external-link-alt svelte-1ix0gvc"></i> IEEE Xplore</a>`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                    if (type === "project") {
                      $$renderer2.push("<!--[-->");
                      $$renderer2.push(`<a${attr("href", url)} class="pub-link svelte-1ix0gvc"><i class="fas fa-project-diagram svelte-1ix0gvc"></i> Project</a>`);
                    } else {
                      $$renderer2.push("<!--[!-->");
                    }
                    $$renderer2.push(`<!--]-->`);
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
