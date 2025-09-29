// BibTeX自动生成函数
function generateBibtex(item, customFields = {}) {
	const { title, authors, venue, year, venueFull } = item;
	
	// 生成BibTeX key (第一作者姓氏 + 年份 + 标题关键词)
	const firstAuthor = authors[0];
	const lastName = firstAuthor.name.split(' ').pop().toLowerCase();
	const titleWords = title.split(' ').slice(0, 2).map(word => 
		word.replace(/[^\w]/g, '').toLowerCase()
	);
	const bibtexKey = `${lastName}${year}${titleWords.join('')}`;
	
	// 生成作者列表
	const authorList = authors.map(author => {
		const nameParts = author.name.split(' ');
		const lastName = nameParts.pop();
		const firstName = nameParts.join(' ');
		return `${lastName}, ${firstName}`;
	}).join(' and ');
	
	// 智能识别发表类型和出版商
	const isConference = venue.includes('Proceedings') || venue.includes('Conference') || venue.includes('Symposium');
	const isJournal = !isConference;
	
	// 确定出版商 - 支持自定义覆盖
	let publisher = customFields.publisher || 'IEEE';
	if (venue.includes('Displays')) {
		publisher = customFields.publisher || 'Elsevier';
	} else if (venue.includes('Optics Express') || venue.includes('Optics Letters')) {
		publisher = customFields.publisher || 'Optical Society of America';
	} else if (venue.includes('AVI')) {
		publisher = customFields.publisher || 'ACM';
	}
	
	// 清理venue名称，移除HTML标签
	const cleanVenue = venueFull.replace(/<[^>]*>/g, '');
	
	// 支持自定义类型和字段
	const entryType = customFields.entryType || (isConference ? 'inproceedings' : 'article');
	const venueField = customFields.venueField || (isConference ? 'booktitle' : 'journal');
	const publisherField = customFields.publisherField || (isConference ? 'organization' : 'publisher');
	
	// 构建BibTeX条目 - 优先使用自定义venue/journal参数
	const venueValue = customFields.journal || customFields.booktitle || cleanVenue;
	const yearValue = customFields.year || year;
	const publisherValue = customFields.publisher || publisher;
	
	let bibtexEntry = `@${entryType}{${bibtexKey},
	title={${title}},
	author={${authorList}},
	${venueField}={${venueValue}},
	year={${yearValue}},
	${publisherField}={${publisherValue}}`;
	
	// 添加自定义字段 - 所有自定义参数都优先
	if (customFields.volume) bibtexEntry += `,\n\tvolume={${customFields.volume}}`;
	if (customFields.number) bibtexEntry += `,\n\tnumber={${customFields.number}}`;
	if (customFields.pages) bibtexEntry += `,\n\tpages={${customFields.pages}}`;
	if (customFields.doi) bibtexEntry += `,\n\tdoi={${customFields.doi}}`;
	if (customFields.url) bibtexEntry += `,\n\turl={${customFields.url}}`;
	if (customFields.issn) bibtexEntry += `,\n\tissn={${customFields.issn}}`;
	if (customFields.month) bibtexEntry += `,\n\tmonth={${customFields.month}}`;
	
	bibtexEntry += '\n}';
	return bibtexEntry;
}

export const research = [
	{
		// 基本信息
		id: "x-mask",
		type: "project", // "project" 或 "publication"
		year: 2025,
		
		// 发表信息
		title: "X-Mask: Improving Soft-Edge Occlusion in Optical See-Through Displays with Cross-Shaped Pinholes",
		venue: "IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
		venueFull: "Proceedings of the <strong>IEEE International Symposium on Mixed and Augmented Reality (ISMAR)</strong>",
		status: "To appear (25.10)",
		
		// 作者信息
		authors: [
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/profile/xiaodan-hu.jpg" },
			{ name: "Christoph Ebner", affiliation: "TU Graz", initials: "CE", photo: "/images/authors/christoph-ebner.jpg" },
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" },
			{ name: "Alexander Plopski", affiliation: "TU Graz", initials: "AP", photo: "/images/authors/alexander-plopski.jpg" }
		],
		
		// 项目信息（仅当type为"project"时使用）
		project: {
			shortTitle: "X-Mask: Cross-Shaped Pinhole Occlusion",
			thumbnail: "/images/projects/x-mask.jpg",
			tags: ["Occlusion Display","Pinhole Array", "Optical Design", "ISMAR 2025"],
			
			// 详情页面内容
			details: {
				abstract: "Placing a transparent liquid crystal display (LCD) into the light path is a simple approach to create occlusion-capable optical see-through head-mounted displays (OST-HMDs) that suffers from defocused (soft-edge) occlusion where the mask leakage partially occludes surrounding content as well. Creating a focused (hard-edge) occlusion that does not suffer from mask leakage requires complicated, bulky optical setups. We present X-Mask, a pinhole-array-based OST-HMD that creates a sharp occlusion mask without the need for a bulky setup requiring only two transparent LCD layers. By rendering a pinhole array on the layer closer to the user's eye, our system functions as a programmable aperture layer that extends the effective depth of field and improves the sharpness of the occlusion mask rendered on the second LCD layer. Utilizing a conventional circular pinhole would result in non-uniform brightness and contrast. By changing the pinhole shape to a cross enables near-optimal retinal tiling with reduced overlaps and gaps. To accommodate pupil size variation, focus distance, and gaze direction, our system design allows for gaze-contingent adjustment of both LCD layers. We validate X-Mask in simulations and a physical prototype showing improved occlusion sharpness and visual uniformity. ",
				keyFeatures: [
					"We propose X-Mask, a novel pinhole-array-based occlusion display to mitigate the severe defocus inherent in soft-edgeocclusion displays, maintaining a wearable form factor and large FOV.",
					"We introduce a cross-shaped pinhole design that allows near-optimal retinal tiling with reduced gaps and overlaps,",
					"We analyze the imaging characteristics of cross-shaped pinholes and occlusion masks, and derive optimal layout parameters that balance visual uniformity and occlusion sharpness. These design insights are implemented and validated in a physical prototype through both simulation and see-through photographs",
				],
				// methodology: "We designed and implemented cross-shaped pinhole patterns that provide superior edge definition compared to traditional circular pinholes. The method involves careful optimization of pinhole geometry and spacing to achieve the desired occlusion effects.",
				// results: "Our experimental results demonstrate significant improvements in edge definition and visual quality when using cross-shaped pinholes compared to traditional circular patterns.",
				images: [
					{ src: "/images/projects/x-mask-demo.jpg", alt: "X-Mask demonstration", caption: "Our pinhole-array-based occlusion display (a) is capable of occluding the real world with minimal bleeding. Compared to conventional displays with a single-layer occlusion mask (b), and circular pinholes (c), our system generates a delinated occlusion mask around the virtual content, leading to high contrast and minimal bleeding of the occluded area (d). By modulating the shape of the pinholes (e, bottom) and the occlusion pattern (e, top), we balance occlusion bleeding with retinal tiling resulting in a more uniform mask with higher contrast." }
                ]
			}
		},
		
		// 链接
		links: {
            project: "/projects/x-mask",
			// ieee: "#",
			preprint: "/papers/ISMAR2025_X_Mask.pdf"
			
		},
		
		// BibTeX自定义参数（可选）
		// bibtexCustom: {
		// 	publisher: "IEEE Computer Society",
		// 	volume: "1",
		// 	pages: "1-10",
		// 	doi: "10.1109/ISMAR.2025.123456"
		// },
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息
		id: "soft-edge-occlusion",
		type: "project",
		year: 2024,
		
		// 发表信息
		title: "Perception-Driven Soft-Edge Occlusion for Optical See-Through Head-Mounted Displays",
		venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
		venueFull: "<strong>IEEE Transactions on Visualization and Computer Graphics (TVCG)</strong>",
		status: "Published (<strong>Open Access</strong>)",
		
		// 作者信息
		authors: [
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/profile/xiaodan-hu.jpg" },
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Alexander Plopski", affiliation: "TU Graz", initials: "AP", photo: "/images/authors/alexander-plopski.jpg" },
			{ name: "Yuta Itoh", affiliation: "The University of Tokyo", initials: "YI", photo: "/images/authors/yuta-itoh.jpg" },
			{ name: "Monica Perusquía-Hernández", affiliation: "NAIST", initials: "MP", photo: "/images/authors/monica-perusquia.jpg" },
			{ name: "Naoya Isoyama", affiliation: "Otsuma Women's University", initials: "NI", photo: "/images/authors/naoya-isoyama.jpg" },
			{ name: "Hideaki Uchiyama", affiliation: "NAIST", initials: "HU", photo: "/images/authors/hideaki-uchiyama.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" }
		],
		
		// 项目信息
		project: {
			shortTitle: "Perception-Driven Soft-Edge Occlusion",
			thumbnail: "/images/projects/soft-edge-demo.png",
			tags: ["Occlusion Display", "Soft-Edge Occlusion", "Human Visual Perception", "TVCG 2024"],
			
			details: {
				// overview: "A perception-driven approach to soft-edge occlusion in optical see-through head-mounted displays, validated through psychophysical experiments.",
				abstract: " Systems with occlusion capabilities, such as those used in vision augmentation, image processing, and optical see-through head-mounted display (OST-HMD), have gained popularity. Achieving precise (hard-edge) occlusion in these systems is challenging, often requiring complex optical designs and bulky volumes. On the other hand, utilizing a single transparent liquid crystal display (LCD) is a simple approach to create occlusion masks. However, the generated mask will appear defocused (soft-edge) resulting in insufficient blocking or occlusion leakage. In our work, we delve into the perception of soft-edge occlusion by the human visual system and present a preference-based optimal expansion method that minimizes perceived occlusion leakage. In a user study involving 20 participants, we made a noteworthy observation that the human eye perceives a sharper edge blur of the occlusion mask when individuals see through it and gaze at a far distance, in contrast to the camera system's observation. Moreover, our study revealed significant individual differences in the perception of soft-edge masks in human vision when focusing. These differences may lead to varying degrees of demand for mask size among individuals. Our evaluation demonstrates that our method successfully accounts for individual differences and achieves optimal masking effects at arbitrary distances and pupil sizes.",
				keyFeatures: [
					"A novel user preference-based expansion strategy that yields complete masking in human vision for the soft-edge occlusion using a single-layered transparent LCD.",
                    "A user study that reveals how four expansion strategies for soft-edge occlusion masks are perceived by users.",
                    "A discussion on the factors influencing users’ perception of defocused occlusion masks in comparison to camera systems and other users, as well as potential application scenarios for soft-edge occlusion based on our findings and expansion strategy."
				],
				// methodology: "We conducted extensive psychophysical experiments with human participants to evaluate different soft-edge occlusion techniques. The methodology involved controlled experiments measuring depth perception accuracy and user comfort.",
				// results: "Our results show significant improvements in depth perception accuracy and user comfort when using perception-driven soft-edge occlusion techniques compared to traditional hard-edge methods.",
				images: [
					{ src: "/images/projects/soft-edge-demo.jpg", alt: "Soft-edge occlusion demo", caption: "Experimental scenes. (a) Two quantitative patterns are displayed: one on a television positioned 1670 mm from the user's eye and another on a smartphone positioned 460 mm from the user's eye. The focal plane is set on the television. (b) A view of the pattern through two occlusion masks, captured by an iPhone SE3 (3.99 mm focal length, f/1.8) with the focal plane positioned on the television (pattern on the left). Both occlusion masks are of the same size and are able to completely occlude the left pattern. Since the right pattern is closer, the required expansion radius for complete occlusion is smaller compared to the left pattern. As a result, the right view shows a slight occlusion leakage effect. (c) Experimental setup: a scene camera and an eye tracker are used to compute the optimal occlusion mask displayed on a single transparent LCD." }
				]
			}
		},
		
		// 链接
		links: {
            project: "/projects/soft-edge-occlusion",
			ieee: "https://ieeexplore.ieee.org/document/10637748",
			preprint: "/papers/Hu_TVCG2024_SoftEdge.pdf",
			slides: "/slides/IEEEVR-2025_Xiaodan_Slides.pdf",
            // video: "/media/videos/soft-edge-occlusion.mp4" // 视频文件太大，暂时注释
		},
		
        bibtexCustom: {
            year:"2025",
            volume:"31",
            number:"9",
            pages:"5259-5274",
            doi:"10.1109/TVCG.2024.3444287"
		},

		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息
		id: "smart-dimming",
		type: "project",
		year: 2024,
		
		// 发表信息
		title: "Smart Dimming Sunglasses for Photophobia Using Spatial Light Modulator",
		venue: "Elsevier Displays",
		venueFull: "<strong>Elsevier Displays</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Hideaki Uchiyama", affiliation: "NAIST", initials: "HU", photo: "/images/authors/hideaki-uchiyama.jpg" },
			{ name: "Naoya Isoyama", affiliation: "Otsuma Women's University", initials: "NI", photo: "/images/authors/naoya-isoyama.jpg" },
			{ name: "Nobuchika Sakata", affiliation: "Ryukoku University", initials: "NS", photo: "/images/authors/nobuchika-sakata.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" }
		],
		
		// 项目信息
		project: {
			shortTitle: "Smart Dimming Sunglasses for Photophobia",
			description: "Spatial light modulator-based sunglasses for photophobia treatment",
			thumbnail: "/images/projects/smart-dimming.png",
			tags: ["Medical AR", "Spatial Light Modulator", "Photophobia", "Light Sensitivity"],
			
			details: {
				overview: "Smart dimming sunglasses using spatial light modulators for photophobia treatment, providing adaptive light control for sensitive users.",
				abstract: "We present a smart sunglasses system engineered to assist individuals experiencing photophobia, particularly those highly sensitive to light intensity. The system integrates a high dynamic range (HDR) camera and a liquid crystal spatial light modulator (SLM) to dynamically regulate light, adapting to environmental scenes by modifying pixel transmittance through a specialized control algorithm, thereby offering adaptable light management to meet the users' visual needs. Nonetheless, a conventional occlusion mask on the SLM, intended to block incoming light, emerges blurred and insufficient due to a misaligned focal plane. To address the challenge of imprecise light filtering, we introduce an optimization algorithm that meticulously adjusts the light attenuation process, effectively diminishing excessive brightness in targeted areas without adversely impacting regions with acceptable levels of luminance.",
				keyFeatures: [
					"A compact architecture of smart sunglasses for photophobia.",
                    "A control algorithm that meets requirements for comfortable vision and operates solely based on input from thescene camera.",
                    "An eyeglasses-specific optimization strategy aimed at addressing the issue of insufficient dimming due to a blurred occlusion mask."
				],
				// methodology: "We developed a prototype system using spatial light modulators integrated into sunglasses frames. The system includes sensors for environmental light detection and algorithms for optimal dimming control.",
				// results: "Our prototype demonstrates effective light dimming capabilities with real-time adjustment, providing significant relief for users with photophobia.",
				images: [
					{ src: "/images/projects/smart-sunglasses.jpg", alt: "Smart dimming demo", caption: "Smart dimming sunglasses demonstration" }
				]
			}
		},
		
		// 链接
		links: {
            project: "/projects/smart-dimming",
			journal: "https://www.sciencedirect.com/science/article/pii/S0141938223002457",
			preprint: "/papers/Hu_Displays2024_SmartDimming.pdf",
			
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息 - 只有publication，不是project
		id: "add-on-occlusion",
		type: "publication",
		year: 2023,
		
		// 发表信息
		title: "Add-On Occlusion: Turning Off-the-Shelf Optical See-Through Head-Mounted Displays Occlusion-Capable",
		venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
		venueFull: "<strong>IEEE Transactions on Visualization and Computer Graphics (TVCG)</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" },
			{ name: "Xubo Yang", affiliation: "Shanghai Jiao Tong University", initials: "XY", photo: "/images/authors/xubo-yang.jpg" }
		],
		
		// 链接
		links: {
            project: "http://dalab.se.sjtu.edu.cn/www/home/?page_id=6719",
			ieee: "https://ieeexplore.ieee.org/document/10050791",
			preprint: "http://dalab.se.sjtu.edu.cn/www/home/wp-content/uploads/2023/04/VR2023_TVCG_cameraReady.pdf",
			// video: "#"
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息 - 只有publication，不是project
		id: "mutual-occlusion",
		type: "publication",
		year: 2021,
		
		// 发表信息
		title: "Realizing Mutual Occlusion in a Wide Field-of-View for Optical See-Through Augmented Reality Displays Based on a Paired-Ellipsoidal-Mirror Structure",
		venue: "Optics Express",
		venueFull: "<strong>Optics Express</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" },
			{ name: "Naoya Isoyama", affiliation: "Otsuma Women's University", initials: "NI", photo: "/images/authors/naoya-isoyama.jpg" },
			{ name: "Hideaki Uchiyama", affiliation: "NAIST", initials: "HU", photo: "/images/authors/hideaki-uchiyama.jpg" },
			{ name: "Hong Hua", affiliation: "University of Arizona", initials: "HH", photo: "/images/authors/hong-hua.jpg" }
		],
		
		// 链接
		links: {
			journal: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-29-26-42751&id=465756",
			preprint: "https://www.researchgate.net/publication/356619211_Realizing_mutual_occlusion_in_a_wide_field-of-view_for_optical_see-through_augmented_reality_displays_based_on_a_paired-ellipsoidal-mirror_structure"
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息 - 只有publication，不是project
		id: "hard-edge-occlusion",
		type: "publication",
		year: 2021,
		
		// 发表信息
		title: "Optical See-Through Augmented Reality Displays with Wide Field of View and Hard-Edge Occlusion by Using Paired Conical Reflectors",
		venue: "Optics Letters",
		venueFull: "<strong>Optics Letters</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" },
			{ name: "Naoya Isoyama", affiliation: "Otsuma Women's University", initials: "NI", photo: "/images/authors/naoya-isoyama.jpg" },
			{ name: "Nobuchika Sakata", affiliation: "Ryukoku University", initials: "NS", photo: "/images/authors/nobuchika-sakata.jpg" },
			{ name: "Hong Hua", affiliation: "University of Arizona", initials: "HH", photo: "/images/authors/hong-hua.jpg" }
		],
		
		// 链接
		links: {
			journal: "https://opg.optica.org/ol/fulltext.cfm?uri=ol-46-17-4208&id=458053",
			preprint: "https://www.researchgate.net/publication/353468253_Optical_see-through_augmented_reality_displays_with_wide_field_of_view_and_hard-edge_occlusion_by_using_paired_conical_reflectors",
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息 - 只有publication，不是project
		id: "rear-indicators",
		type: "publication",
		year: 2024,
		
		// 发表信息
		title: "ReAR Indicators: Peripheral Cycling Indicators for Rear-Approaching Hazards",
		venue: "International Conference on Advanced Visual Interfaces (AVI)",
		venueFull: "Proceedings of the <strong>International Conference on Advanced Visual Interfaces (AVI)</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Guanghan Zhao", affiliation: "Tohoku University", initials: "GZ", photo: "/images/authors/guanghan-zhao.jpg" },
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Jason Orlosky", affiliation: "Augusta University", initials: "JO", photo: "/images/authors/jason-orlosky.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" }
		],
		
		// 链接
		links: {
			conference: "https://dl.acm.org/doi/10.1145/3656650.3656659",
			// preprint: "/papers/Zhao_AVI2024_ReARIndicators.pdf",
			// video: "#"
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	},
	
	{
		// 基本信息 - 只有publication，不是project
		id: "retinotopic-foveated",
		type: "publication",
		year: 2024,
		
		// 发表信息
		title: "Retinotopic Foveated Rendering",
		venue: "IEEE Virtual Reality and 3D User Interfaces Conference (IEEE VR)",
		venueFull: "Proceedings of the <strong>IEEE Virtual Reality and 3D User Interfaces Conference (IEEE VR)</strong>",
		status: "Published",
		
		// 作者信息
		authors: [
			{ name: "Yan Zhang", affiliation: "Shanghai Jiao Tong University", initials: "YZ", photo: "/images/authors/yan-zhang.jpg" },
			{ name: "Keyao You", affiliation: "Shanghai Jiao Tong University", initials: "KY", photo: "/images/authors/keyao-you.jpg" },
			{ name: "Xiaodan Hu", affiliation: "TU Graz", initials: "XH", photo: "/images/authors/xiaodan-hu.jpg" },
			{ name: "Hangyu Zhou", affiliation: "Shanghai Jiao Tong University", initials: "HZ", photo: "/images/authors/hangyu-zhou.jpg" },
			{ name: "Kiyoshi Kiyokawa", affiliation: "NAIST", initials: "KK", photo: "/images/authors/kiyoshi-kiyokawa.jpg" },
			{ name: "Xubo Yang", affiliation: "Shanghai Jiao Tong University", initials: "XY", photo: "/images/authors/xubo-yang.jpg" }
		],
		
		// 链接
		links: {
            project: "http://dalab.se.sjtu.edu.cn/www/home/?page_id=6783",
			ieee: "https://ieeexplore.ieee.org/document/10494106",
			preprint: "http://dalab.se.sjtu.edu.cn/www/home/wp-content/uploads/2024/04/Retinotopic-Foveated-Rendering.pdf",
			video: "http://dalab.se.sjtu.edu.cn/www/home/wp-content/uploads/2024/04/presentation-video.mp4"
		},
		
		// BibTeX - 自动生成，支持自定义参数
		get bibtex() { return generateBibtex(this, this.bibtexCustom || {}); }
	}
];

// 导出分离的数据集
export const projects = research.filter(item => item.type === "project");
export const publications = research;
