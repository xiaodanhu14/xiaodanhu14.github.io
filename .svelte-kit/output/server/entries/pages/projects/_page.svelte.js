import { $ as head, V as ensure_array_like, W as attr } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
const projects = [
  {
    id: "x-mask",
    title: "X-Mask: Cross-Shaped Pinhole Occlusion",
    description: "Cross-shaped pinhole patterns for improving soft-edge occlusion capabilities",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["Computer Vision", "AR/XR", "Optical Design"],
    links: {
      details: "#",
      paper: "#"
    }
  },
  {
    id: "soft-edge",
    title: "Perception-Driven Soft-Edge Occlusion",
    description: "Psychophysically valid soft-edge occlusion techniques",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["AR", "Perception", "TVCG"],
    links: {
      details: "#",
      pdf: "#"
    }
  },
  {
    id: "videosee",
    title: "VideoSeeThrough Color Correction",
    description: "Advanced color correction for optical see-through displays",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["Color Science", "IEEE VR", "Real-time"],
    links: {
      details: "#",
      video: "#"
    }
  },
  {
    id: "motion-dr",
    title: "Motion-Responsive Diminished Reality",
    description: "Real-time DR with imperceptible latency",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["ISMAR", "Real-time", "Latency"],
    links: {
      details: "#",
      video: "#"
    }
  },
  {
    id: "depth-rendering",
    title: "Depth-Based Occlusion Rendering",
    description: "Depth-based rendering for diminished reality",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["Depth Processing", "Enhanced Reality"],
    links: {
      details: "#",
      pdf: "#"
    }
  },
  {
    id: "light-field",
    title: "Real-Time Light Field AR Rendering",
    description: "Light field processing for real-time AR",
    thumbnail: "/images/profile/xiaodan-hu.jpg",
    tags: ["Light Fields", "SIGGRAPH", "Multi-view"],
    links: {
      details: "#",
      demo: "#"
    }
  }
];
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Projects - Xiaodan Hu</title>`);
    });
  });
  $$renderer.push(`<h2 class="section-header svelte-rqn88j">Research Projects</h2> <div class="project-grid svelte-rqn88j"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array[$$index_2];
    $$renderer.push(`<div class="project-card svelte-rqn88j"><div class="project-thumbnail svelte-rqn88j"><img${attr("src", project.thumbnail)}${attr("alt", project.title)} style="width:100%; height:100%; object-fit: cover;"/></div> <div class="project-content svelte-rqn88j"><h3 class="project-title svelte-rqn88j">${escape_html(project.title)}</h3> <p class="project-description svelte-rqn88j">${escape_html(project.description)}</p> <div class="project-stack svelte-rqn88j"><!--[-->`);
    const each_array_1 = ensure_array_like(project.tags);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$renderer.push(`<span class="stack-tag svelte-rqn88j">${escape_html(tag)}</span>`);
    }
    $$renderer.push(`<!--]--></div> <div class="project-links svelte-rqn88j"><!--[-->`);
    const each_array_2 = ensure_array_like(Object.entries(project.links));
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let [type, url] = each_array_2[$$index_1];
      if (type === "details") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<a${attr("href", url)} class="project-link svelte-rqn88j"><i class="fas fa-info-circle svelte-rqn88j"></i> View Details</a>`);
      } else {
        $$renderer.push("<!--[!-->");
        if (type === "paper" || type === "pdf") {
          $$renderer.push("<!--[-->");
          $$renderer.push(`<a${attr("href", url)} class="project-link svelte-rqn88j"><i class="fas fa-file-pdf svelte-rqn88j"></i> Paper</a>`);
        } else {
          $$renderer.push("<!--[!-->");
          if (type === "video") {
            $$renderer.push("<!--[-->");
            $$renderer.push(`<a${attr("href", url)} class="project-link svelte-rqn88j"><i class="fas fa-play svelte-rqn88j"></i> Video</a>`);
          } else {
            $$renderer.push("<!--[!-->");
            if (type === "demo") {
              $$renderer.push("<!--[-->");
              $$renderer.push(`<a${attr("href", url)} class="project-link svelte-rqn88j"><i class="fas fa-desktop svelte-rqn88j"></i> Demo</a>`);
            } else {
              $$renderer.push("<!--[!-->");
            }
            $$renderer.push(`<!--]-->`);
          }
          $$renderer.push(`<!--]-->`);
        }
        $$renderer.push(`<!--]-->`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]--></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  _page as default
};
