import { $ as head, W as attr, V as ensure_array_like } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
const profile = {
  name: "Xiaodan Hu",
  nameChinese: "胡潇丹",
  nameJapanese: "胡瀟丹（コ ショウタン）",
  position: "PostDoc at TU Graz",
  location: "Graz, Austria | TU Graz",
  email: "xiaodan.hu@tugraz.at",
  photo: "/images/profile/xiaodan-hu.jpg",
  introduction: {
    english: "I am a postdoctoral researcher at Graz University of Technology (TU Graz) in Austria, working in the Advanced Mixed Reality Interfaces Lab led by Dr. Alexander Plopski since May 2024. I also serve as a commissioned instructor at the Cybernetics and Engineering Lab (CARE Lab) at the Nara Institute of Science and Technology (NAIST) in Japan since April 2024, where I received both my Ph.D. (2024) and M.Sc. (2021) degrees in Information Science under the supervision of Prof. Kiyoshi Kiyokawa.",
    japanese: "2021年9月奈良先端科学技術大学院大学（NAIST）博士前期課程修了．2024年3月同博士後期課程修了（指導教官：清川清）．2024年5月よりオーストリア・グラーツ工科大学Advanced Mixed Reality Interfaces Labポスドク研究員．同年4月よりNAISTサイバネティクス・リアリティ工学研究室委託教員．光学シースルー型ヘッドマウントディスプレイ（特に遮蔽機能を有するシステム），視覚拡張，および拡張現実における人間の視覚認知に関する研究に従事．人間の視覚特性に即した知覚的に快適なディスプレイ設計に関心を持つ．",
    chinese: "2021年9月于奈良先端科学技术大学院大学（NAIST）计算机科学硕士课程毕业，2024年3月取得博士学位（导师：Kiyoshi Kiyokawa）。现为奥地利格拉茨工业大学（Graz University of Technology）Advanced Mixed Reality Interfaces Lab的博士后研究员（2024年5月起），同时担任NAIST Cybernetics and Engineering Lab的委托教员（2024年4月起）。主要从事光学式透视头戴式显示器相关研究，特别是具备遮挡能力的设备、视觉增强技术、以及增强现实中与人类视觉感知相关的问题。致力于基于人眼视觉特性，设计在知觉层面上更加舒适的显示设备。"
  }
};
const news = [
  {
    date: "2025.01",
    content: 'Our paper "X-Mask: Improving Soft-Edge Occlusion in Optical See-Through Displays with Cross-Shaped Pinholes" has been accepted by IEEE ISMAR 2025.'
  },
  {
    date: "2025.03",
    content: "I presented our TVCG paper at IEEE VR 2025."
  },
  {
    date: "2024.08",
    content: 'Our paper "Perception-Driven Soft-Edge Occlusion for Optical See-Through Head-Mounted Displays" has been accepted by TVCG.'
  },
  {
    date: "2024.05",
    content: "I joined TU Graz as a postdoctoral researcher."
  },
  {
    date: "2024.04",
    content: "I started to serve as a commissioned instructor at CARE Lab."
  },
  {
    date: "2024.03",
    content: "I graduated with a Ph.D. in Engineering from NAIST."
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Xiaodan Hu - Academic Homepage</title>`);
      });
    });
    $$renderer2.push(`<section class="profile-compact svelte-1uha8ag"><img${attr("src", profile.photo)}${attr("alt", profile.name)} class="profile-photo svelte-1uha8ag"/> <div class="profile-info-section svelte-1uha8ag"><div class="profile-text svelte-1uha8ag"><h1 class="svelte-1uha8ag">${escape_html(profile.name)}</h1> <p class="subtitle svelte-1uha8ag">中：${escape_html(profile.nameChinese)} | 日：${escape_html(profile.nameJapanese)}</p> <p class="position svelte-1uha8ag">${escape_html(profile.position)}</p></div></div> <div class="contact-compact svelte-1uha8ag"><div class="contact-item svelte-1uha8ag"><i class="fas fa-map-marker-alt"></i> <span>${escape_html(profile.location)}</span></div> <div class="contact-item svelte-1uha8ag"><i class="fas fa-envelope"></i> <span>${escape_html(profile.email)}</span></div> <div class="contact-item svelte-1uha8ag"><i class="fas fa-graduation-cap"></i> <span>Google Scholar</span></div></div></section> <section class="section"><p>${escape_html(profile.introduction.english)}</p> <p>My research focuses on <strong>optical see-through head-mounted displays</strong> (particularly <strong>occlusion-capable systems</strong>), <strong>vision augmentation</strong>, and the role of <strong>human visual perception in AR</strong>. I am especially interested in designing display systems that align with the characteristics of the human visual system to enable perceptually optimized and comfortable visual experiences.</p> <div style="margin-top: 1.5rem; padding: 1rem; background: #f8fffe; border-radius: 8px; border-left: 3px solid var(--mint);"><h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">日本語</h4> <p>${escape_html(profile.introduction.japanese)}</p></div> <div style="margin-top: 1rem; padding: 1rem; background: var(--light-mint); border-radius: 8px; border-left: 3px solid var(--teal);"><h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">中文</h4> <p>${escape_html(profile.introduction.chinese)}</p></div></section> <section class="section"><h2>Latest News</h2> <!--[-->`);
    const each_array = ensure_array_like(news);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="news-item svelte-1uha8ag"><span class="news-date svelte-1uha8ag">${escape_html(item.date)}</span> <div class="news-content svelte-1uha8ag">${escape_html(item.content)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="section"><h2>Teaching</h2> <div style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;"><strong>Augmented Reality</strong>, TU Graz, 2024, Lecturer</div></section> <section class="section"><h2>Awards &amp; Honors</h2> <div class="award-item svelte-1uha8ag"><span class="award-date svelte-1uha8ag">2021.10</span> <div class="award-content svelte-1uha8ag">Selected by <strong>JST Support for Pioneering Research Initiated by the Next Generation program</strong> (次世代研究者挑戦的研究プログラム) (one student per grade was selected).</div></div> <div class="award-item svelte-1uha8ag"><span class="award-date svelte-1uha8ag">2021.01</span> <div class="award-content svelte-1uha8ag"><strong>Otsuka Toshimi Scholarship</strong> (大塚敏美育英奨学金).</div></div></section>`);
  });
}
export {
  _page as default
};
