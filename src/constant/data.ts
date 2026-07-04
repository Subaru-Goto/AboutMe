import type { Language } from "../types/language";

export const translations = {
  en: {
    name: "Subaru Goto",
    title: "AI Product Engineer",
    subtitle:
      "Building AI-Powered Products End to End — from Data and LLM Pipelines to Polished User Interfaces",
    about: "About Me",
    aboutText:
      "I am an AI product engineer with roots in data science and full-stack web development. I started out building machine learning models, A/B tests, and data pipelines as a data scientist and product analyst at trivago and Zalando, then moved into frontend engineering at Axel Springer to learn how polished products are actually shipped. Today I combine both worlds: I build AI-powered applications end to end — React and TypeScript on the frontend, Python, FastAPI, and LangChain on the backend — with a data-driven mindset throughout. Having worked in international tech teams, I enjoy turning ideas into user-centered products that create real value.",
    skills: "Technical Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    contactText:
      "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!",
    experiences: [
      {
        title: "Frontend Developer",
        company: "Axel Springer SE",
        period: "06.2024 - 06.2025",
        description:
          "At Axel Springer, I developed React-based applications for various internal and public-facing projects, including an Advent calendar, data management controller, weather and election widgets. I also built a data management controller using React and implemented analytics and key performance indicators (KPIs) to support data-driven decision-making.",
      },
      {
        title: "Product Analyst",
        company: "Zalando SE",
        period: "01.2022 – 11.2023",
        description:
          "Monitored discount recommendation systems, built a data pipeline for governance dashboards, conducted frequent ad-hoc analyses using Python, and implemented basic anomaly detection with the Poisson distribution.",
      },
      {
        title: "Data Scientist",
        company: "trivago N.V.",
        period: "08.2019 – 01.2022",
        description:
          "Developed optimal bid recommendation models for advertisers using a stochastic gradient descent classifier. Conducted A/B testing and analysis, built and maintained a reporting data pipeline, and trained two junior analysts and new team members with regular weekly support during their first six months.",
      },
    ],
    projectsList: [
      {
        title: "Bild Advents Kalender",
        description:
          "An interactive Advent calendar built with React and Tailwind CSS, featuring daily content updates.",
        tech: ["React", "Tailwind CSS", "GSAP"],
        link: "https://www.bild.de/ig/0f561b4c-e8b3-4d4b-a8bb-38cf07d5b3ed/index/index.html",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
    ],
    getInTouch: "Get In Touch",
    contactForm: {
      title: "Get In Touch",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email",
      subjectRequired: "Subject is required",
      messageRequired: "Message is required",
    },
  },
  ja: {
    name: "後藤　昴",
    title: "AIプロダクトエンジニア",
    subtitle:
      "データ・LLMパイプラインから洗練されたUIまで、AIプロダクトをエンドツーエンドで開発しています",
    about: "自己紹介",
    aboutText:
      "データサイエンスとフルスタック開発を基盤とするAIプロダクトエンジニアです。trivagoやZalandoでデータサイエンティスト・プロダクトアナリストとして機械学習モデルやA/Bテスト、データパイプラインの構築に携わった後、Axel Springerでフロントエンド開発に従事し、プロダクトを磨き上げて届けるまでの過程を学びました。現在はこの2つの経験を組み合わせ、フロントエンドはReactとTypeScript、バックエンドはPython・FastAPI・LangChainを用いて、AIを活用したプロダクトをエンドツーエンドで開発しています。国際的なチームでの協働を得意とし、アイデアをユーザー中心の価値あるプロダクトへと形にすることを大切にしています。",
    skills: "技術スキル",
    experience: "経験",
    projects: "プロジェクト",
    contact: "連絡先",
    contactText:
      "新しい機会や興味深いプロジェクトについて話し合うことを常に歓迎しています。お気軽にご連絡ください！",
    experiences: [
      {
        title: "フロントエンド開発者",
        company: "Axel Springer SE",
        period: "2024年6月 - 2025年6月",
        description:
          "Axel Springer社では、アドベントカレンダー、天気情報、選挙関連, データ管理用のコントローラーなどのプロジェクトにおいて、Reactを用いたアプリケーション開発を担当しました。ユーザー行動の分析を目的としたトラッキング実装やKPIの設定を行いました。",
      },
      {
        title: "プロダクトアナリスト",
        company: "Zalando SE",
        period: "2022年1月 – 2023年11月",
        description:
          "割引推薦システムの監視を行い、割引ガバナンスダッシュボード用のデータパイプラインを構築。Pythonを用いたアドホック分析を頻繁に実施し、ポアソン分布を活用した基本的な異常検知を実装しました。",
      },
      {
        title: "データサイエンティスト",
        company: "trivago N.V.",
        period: "2019年8月 – 2022年1月",
        description:
          "Stochastic gradient descent classifierを用いた広告主向けの入札最適化モデルを開発。A/Bテストの設計と分析を実施し、レポート用のデータパイプラインを構築・運用しました。ジュニアアナリスト2名と新メンバーの育成を担当し、最初の6ヶ月間は週次のフォローアップも行いました。",
      },
    ],
    projectsList: [
      {
        title: "Bild Advents Kalender",
        description: "ReactとTailwind CSSを使用した、アドベントカレンダー。",
        tech: ["React", "Tailwind CSS", "GSAP"],
        link: "https://www.bild.de/ig/0f561b4c-e8b3-4d4b-a8bb-38cf07d5b3ed/index/index.html",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
    ],
    getInTouch: "お問い合わせ",
    contactForm: {
      title: "お問い合わせ",
      name: "お名前",
      email: "メールアドレス",
      subject: "件名",
      message: "メッセージ",
      send: "送信",
      sending: "送信中...",
      success: "メッセージが正常に送信されました！",
      error: "メッセージの送信に失敗しました。もう一度お試しください。",
      nameRequired: "名前は必須です",
      emailRequired: "メールアドレスは必須です",
      emailInvalid: "有効なメールアドレスを入力してください",
      subjectRequired: "件名は必須です",
      messageRequired: "メッセージは必須です",
    },
  },
  de: {
    name: "Subaru Goto",
    title: "AI Product Engineer",
    subtitle:
      "KI-gestützte Produkte end-to-end — von Daten- und LLM-Pipelines bis zur ausgereiften Benutzeroberfläche",
    about: "Über mich",
    aboutText:
      "Ich bin AI Product Engineer mit Wurzeln in Data Science und Full-Stack-Webentwicklung. Begonnen habe ich als Data Scientist und Product Analyst bei trivago und Zalando, wo ich Machine-Learning-Modelle, A/B-Tests und Datenpipelines entwickelte, bevor ich bei Axel Springer in die Frontend-Entwicklung wechselte und lernte, wie ausgereifte Produkte wirklich ausgeliefert werden. Heute verbinde ich beide Welten und entwickle KI-gestützte Anwendungen end-to-end — mit React und TypeScript im Frontend sowie Python, FastAPI und LangChain im Backend, stets mit einem datengetriebenen Ansatz. Durch meine Erfahrung in internationalen Teams verwandle ich Ideen gerne in nutzerzentrierte Produkte mit echtem Mehrwert.",
    skills: "Technische Fähigkeiten",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt",
    contactText:
      "Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte. Zögern Sie nicht, mich zu kontaktieren!",
    experiences: [
      {
        title: "Frontend-Entwickler",
        company: "Axel Springer SE",
        period: "05.2025 - 06.2025",
        description:
          "Bei Axel Springer entwickelte ich React-basierte Anwendungen für verschiedene Projekte, darunter ein Adventskalender, Wetter-Apps und ein Wahl-Widget. Zudem erstellte ich ein Datenverwaltungs-Tool mit React und implementierte Analytik-Mechanismen sowie KPIs zur Unterstützung datenbasierter Entscheidungen.",
      },
      {
        title: "Product Analyst",
        company: "Zalando SE",
        period: "01.2022 – 11.2023",
        description:
          "Überwachte Rabatt-Empfehlungssysteme, entwickelte eine Datenpipeline für Governance-Dashboards, führte regelmäßig Ad-hoc-Analysen mit Python durch und implementierte eine einfache Anomalieerkennung basierend auf der Poisson-Verteilung.",
      },
      {
        title: "Data Scientist",
        company: "trivago N.V.",
        period: "08.2019 – 01.2022",
        description:
          "Entwickelte ein Empfehlungsmodell für optimale Gebote von Werbetreibenden mithilfe eines stochastischen Gradientenabstiegs-Klassifikators. Führte A/B-Tests durch und analysierte die Ergebnisse, erstellte und pflegte eine Reporting-Datenpipeline und betreute zwei Junior-Analysten sowie neue Teammitglieder mit wöchentlichen Check-ins in den ersten sechs Monaten.",
      },
    ],
    projectsList: [
      {
        title: "Bild Advents Kalender",
        description:
          "Interactive Adventskalender mit React und Tailwind CSS, der täglich neue Inhalte bietet.",
        tech: ["React", "Tailwind CSS", "GSAP"],
        link: "https://www.bild.de/ig/0f561b4c-e8b3-4d4b-a8bb-38cf07d5b3ed/index/index.html",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
      {
        title: "Coming Soon",
        description: "",
        tech: [],
        link: "",
      },
    ],
    getInTouch: "Kontakt aufnehmen",
    contactForm: {
      title: "Kontakt aufnehmen",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
      nameRequired: "Name ist erforderlich",
      emailRequired: "E-Mail ist erforderlich",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail ein",
      subjectRequired: "Betreff ist erforderlich",
      messageRequired: "Nachricht ist erforderlich",
    },
  },
};

export type Translation = (typeof translations)[Language];
