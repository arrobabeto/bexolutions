import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "kundenwert-berechnen-kmu",
  category: "Marketing & Vertrieb",
  readTime: "7 Min. Lesezeit",
  date: "Oktober 2026",
  datePublished: "2026-10-13",
  title: "Kundenwert berechnen",
  subtitle: "Warum die 3:1-Regel für KMU zu kurz greift",
  tagline:
    "Zwei Fälle aus der Praxis zeigen, warum KMU den ganzen Kunden rechnen sollten — nicht nur das erste Mandat",
  heroImage: "/images/blog/kundenwert-berechnen-kmu/hero.jpg",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Die 3:1-Regel sagt: Ein Kunde soll mindestens dreimal so viel einbringen, wie seine Gewinnung kostet. Bei KMU, die Dienstleistungen verkaufen, zählt sie aber nur das erste Mandat und die eigenen Rechnungen eines Kunden — und unterschätzt so oft genau die wertvollsten Kunden. Zwei Fälle aus unserer Agentur zeigen, warum Sie mit Deckungsbeitrag statt Umsatz, über mehrere Jahre, mit Empfehlungen und ehrlich erfassten Akquisekosten rechnen sollten.",
  },
  author: {
    name: "Balaram Furrer",
    jobTitle: "CEO",
    bio: "Balaram Furrer ist CEO der Bexolutions Marketing und Vertrieb AG in Hunzenschwil. Er begleitet Schweizer KMU dabei, Marketing und Vertrieb so aufzubauen, dass aus Sichtbarkeit planbar Kunden werden.",
  },
  toc: [
    {
      id: "kundenwert-und-akquisekosten",
      label: "Was Kundenwert und Akquisekosten bedeuten",
    },
    {
      id: "woher-die-3-1-regel-kommt",
      label: "Woher die 3:1-Regel kommt und was sie richtig macht",
    },
    {
      id: "kunde-der-weniger-bezahlte",
      label: "Ein Kunde, der jedes Jahr weniger bezahlte",
    },
    {
      id: "budget-waechst",
      label: "Wenn das Budget wächst, aber nicht der Aufwand",
    },
    {
      id: "die-andere-seite-der-formel",
      label: "Die andere Seite der Formel",
    },
    {
      id: "kunden-mit-potenzial-erkennen",
      label: "Woran Sie einen Kunden mit Potenzial früh erkennen",
    },
    {
      id: "den-ganzen-kunden-rechnen",
      label: "So rechnen Sie den ganzen Kunden",
    },
    { id: "haeufige-fragen", label: "Häufige Fragen zum Kundenwert" },
    { id: "fazit", label: "Fazit" },
  ],
  seo: {
    title: "Kundenwert berechnen: Die 3:1-Regel greift für KMU zu kurz",
    headline:
      "Kundenwert berechnen: Warum die 3:1-Regel für KMU zu kurz greift",
    description:
      "Die 3:1-Regel für Kundenwert und Akquisekosten passt in der Theorie. Zwei Fälle aus der Praxis zeigen, warum KMU den ganzen Kunden rechnen sollten.",
    ogImage: "/images/blog/kundenwert-berechnen-kmu/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: "<p>Die bekannte 3:1-Regel sagt, dass ein Kunde über die ganze Zusammenarbeit mindestens dreimal so viel einbringen soll, wie seine Gewinnung kostet. In der Theorie stimmt das. Bei KMU, die Dienstleistungen verkaufen, unterschätzt die Regel aber oft genau die Kunden, die am meisten bringen, weil sie nur das erste Mandat und die eigenen Rechnungen eines Kunden zählt.</p><p>In diesem Beitrag zeigen wir an zwei echten Fällen aus unserer Agentur, wo die Formel hilft, wo sie danebenliegt und wie Sie stattdessen den ganzen Kunden rechnen.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "kundenwert-und-akquisekosten",
      title: "Was Kundenwert und Akquisekosten bedeuten",
    },
    {
      type: "richText",
      html: "<p>Der <strong>Kundenwert</strong> (englisch Customer Lifetime Value, kurz CLV oder LTV) ist das, was ein Kunde über die gesamte Zusammenarbeit einbringt. Sauber gerechnet zählt dabei nicht der Umsatz, sondern das, was nach den Kosten der Leistung übrig bleibt, also der Deckungsbeitrag.</p><p>Die <strong>Akquisekosten</strong> (englisch Customer Acquisition Cost, kurz CAC) sind alles, <a href=\"/wissen/b2b-kaeufer-ki-recherche-kmu-schweiz\">was die Gewinnung eines neuen Kunden kostet</a>: Werbung, Erstgespräche, Offerten und die Zeit, die der Inhaber selbst investiert. Gerade dieser letzte Posten wird in KMU gerne vergessen.</p><p>Das Verhältnis der beiden Grössen zeigt, ob sich die Gewinnung eines Kunden lohnt. Ein Beispiel mit runden Zahlen: Bringt ein Kunde in drei Jahren 30'000 Franken Deckungsbeitrag und hat seine Gewinnung 5'000 Franken gekostet, liegt das Verhältnis bei 6 zu 1.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "woher-die-3-1-regel-kommt",
      title: "Woher die 3:1-Regel kommt und was sie richtig macht",
    },
    {
      type: "richText",
      html: '<p>Die Regel stammt aus dem Softwaregeschäft. David Skok, Investor bei Matrix Partners, schreibt, dass die besten Softwarefirmen mit Abo-Modell ein Verhältnis von Kundenwert zu Akquisekosten von mehr als 3 erreichen, teilweise sogar 7 oder 8 (Quelle: <a href="https://www.forentrepreneurs.com/saas-metrics-2/">For Entrepreneurs, SaaS Metrics 2.0</a>). Skok selbst nennt das eine Richtlinie und keine feste Regel.</p><p>Im Softwaregeschäft funktioniert die Formel gut. Ein Abo kostet jeden Monat gleich viel, das Produkt ist standardisiert, und wie viele Kunden pro Jahr kündigen, lässt sich ziemlich genau messen.</p><p>Der wahre Kern gilt auch für KMU: Wer für einen Kunden mehr ausgibt, als er mit ihm verdient, verliert Geld. Deshalb lohnt es sich, überhaupt zu rechnen. Die Frage ist nur, was man in die Rechnung aufnimmt.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "kunde-der-weniger-bezahlte",
      title:
        "Ein Kunde, der jedes Jahr weniger bezahlte und trotzdem zu den wertvollsten gehört",
    },
    {
      type: "richText",
      html: "<p>Einer unserer Kunden hat im ersten Jahr 7'500 Franken bezahlt, im zweiten 7'000 und im dritten noch 4'500. Wer nur seine Rechnungen anschaut, sieht einen Kunden, der langsam ausläuft.</p><p>Diese Sicht lässt die Hälfte weg. Der Kunde hat uns zwei neue Kunden vermittelt, die zusammen 20'500 Franken Umsatz gebracht haben. Zusammen mit seinen eigenen Aufträgen sind das knapp 40'000 Franken, und für seine Gewinnung haben wir weniger als zehn Stunden aufgewendet, Analyse, Strategie und Absprache im Team eingerechnet.</p>",
    },
    {
      type: "table",
      headers: ["", "Umsatz"],
      rows: [
        ["Eigene Aufträge (3 Jahre)", "19'000 Franken"],
        ["Zwei vermittelte Kunden", "20'500 Franken"],
        ["Total", "39'500 Franken"],
      ],
    },
    {
      type: "richText",
      html: '<p>Die klassische Berechnung des Kundenwerts zählt nur die erste Zeile. Gut die Hälfte dessen, was dieser Kunde gebracht hat, taucht darin nicht auf.</p><p>Warum hat er uns empfohlen? Die Erwartungen wurden erfüllt, und wenn es Probleme gab, waren wir zur Stelle und haben daran gearbeitet, bis es gepasst hat. <a href="/wissen/google-bewertungen-einfordern-kmu-schweiz">Er hat sich nie allein gelassen gefühlt</a>. Dazu kommt, dass wir für Kunden, die uns empfehlen, Leistungen übernehmen. Die gute Erfahrung ist die Voraussetzung, der Dank für die Empfehlung gibt den Anstoss.</p><p>Auffällig ist auch das zweite Jahr: Wir haben für fast das gleiche Geld deutlich weniger Arbeit gehabt. Im ersten Jahr kostet der Aufbau am meisten, danach steigt die Marge, auch wenn der Umsatz sinkt.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "budget-waechst",
      title: "Wenn das Budget wächst, aber nicht der Aufwand",
    },
    {
      type: "richText",
      html: "<p>Ein anderer Kunde hat im ersten Jahr 50'000 Franken in einen gesamten Marketingmassnahmenplan investiert, im zweiten Jahr 71'000 Franken. Das sind 42 Prozent mehr, ohne dass der Aufwand nennenswert gestiegen ist.</p><p>Der Grund: Wir haben mehr Verantwortung übernommen, also breitere Aufgabengebiete, und wir haben schnellere Reaktionszeiten vereinbart. Bezahlt hat der Kunde nicht für mehr Arbeit, sondern für weniger Koordination auf seiner Seite und für die Sicherheit, dass etwas passiert, wenn es darauf ankommt.</p><p>Auch diesen Sprung sieht keine Formel, die den Kundenwert aus dem ersten Auftrag hochrechnet.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "die-andere-seite-der-formel",
      title: "Die andere Seite der Formel: was Unentschlossenheit kostet",
    },
    {
      type: "richText",
      html: '<p>Die 3:1-Regel kann sich auch in die andere Richtung irren. <a href="/wissen/linkedin-outreach-schweiz-b2b-leads-kmu">Akquisekosten entstehen nicht nur durch Werbung</a>, sondern vor allem durch Zeit.</p><p>Kunden, die sehr lange brauchen, um sich zu entscheiden, verursachen viele Gespräche, oft dieselben mehrmals, und eine Menge Vorarbeit, die mit der eigentlichen Aufgabe nichts zu tun hat und nicht bezahlt wird. Wer diese Stunden nicht mitrechnet, hält einen teuren Kunden für günstig. Wir lehnen solche Mandate deshalb ab, auch wenn das erste Budget gut wäre.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "kunden-mit-potenzial-erkennen",
      title: "Woran Sie einen Kunden mit Potenzial früh erkennen",
    },
    {
      type: "richText",
      html: "<p>Ob ein Kunde ausbaut, sein Budget erhöht oder Sie weiterempfiehlt, zeigt sich nicht am ersten Budget. Es zeigt sich an der Haltung des Inhabers. Will er wachsen? Verfolgt er Ziele, oder fährt er lieber die sichere Schiene?</p><p>Unsere Beobachtung widerspricht einem verbreiteten Bild: KMU-Unternehmer sind ziemlich risikofreudig. Wenn man ihnen eine Chance realistisch und nachweisbar belegen kann, sind sie bereit, Neues zu wagen. Die Beweislast liegt also beim Anbieter.</p><p>Umgekehrt sind Unternehmer ohne Vision selten Kunden mit Potenzial. Gemeint sind nicht fehlende Umsatzziele, sondern fehlender Glaube an das eigene Angebot. Wer selbst nicht überzeugt ist, dass sein Produkt oder seine Dienstleistung etwas bewegt, investiert auch nicht in deren Sichtbarkeit.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "den-ganzen-kunden-rechnen",
      title: "So rechnen Sie den ganzen Kunden",
    },
    {
      type: "richText",
      html: "<p>Sie brauchen dafür kein neues Werkzeug. Vier Anpassungen genügen:</p><ul><li><strong>Deckungsbeitrag statt Umsatz:</strong> Rechnen Sie mit dem, was nach den Kosten der Leistung übrig bleibt. Ein Kunde mit kleinerem Umsatz und tiefem Aufwand kann mehr wert sein als ein grosser mit viel Betreuung.</li><li><strong>Mehrere Jahre statt erstes Mandat:</strong> Schauen Sie, wie sich bestehende Kunden über zwei bis drei Jahre entwickelt haben. Das ist eine bessere Grundlage als jede Annahme.</li><li><strong>Empfehlungen zuordnen:</strong> Halten Sie bei jedem Neukunden fest, wer ihn empfohlen hat, zum Beispiel mit einem Feld «Empfohlen von» in Ihrem CRM oder Ihrer Kundenliste. Erst dann sehen Sie, welche Kunden Ihnen neue bringen.</li><li><strong>Akquisekosten ehrlich erfassen:</strong> Zählen Sie Gespräche, Offerten und die Zeit des Inhabers mit. Unentschlossene Interessenten werden so sichtbar teuer.</li></ul><p>Die 3:1-Regel bleibt dabei ein guter Kompass. Sie ist nur kein Gesetz, das man mechanisch auf das erste Mandat anwendet.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fragen",
      title: "Häufige Fragen zum Kundenwert",
    },
    {
      type: "richText",
      html: "<p><strong>Was ist ein gutes Verhältnis von Kundenwert zu Akquisekosten?</strong><br>Als Richtwert gilt 3 zu 1: Ein Kunde sollte über die ganze Zusammenarbeit mindestens dreimal so viel einbringen, wie seine Gewinnung kostet. Die Regel stammt aus dem Softwaregeschäft. Für KMU, die Dienstleistungen verkaufen, ist sie ein Kompass. Wichtiger als die genaue Zahl ist, dass Sie den ganzen Kunden rechnen und nicht nur den ersten Auftrag.</p><p><strong>Wie berechne ich den Kundenwert in einem Dienstleistungs-KMU?</strong><br>Nehmen Sie den Deckungsbeitrag pro Jahr, also den Umsatz abzüglich der Kosten für die Leistung, und rechnen Sie ihn über die Jahre, die ein Kunde typischerweise bleibt. Als Grundlage dienen Ihre bestehenden Kunden der letzten zwei bis drei Jahre. Den Umsatz aus Empfehlungen weisen Sie separat aus.</p><p><strong>Zählen Empfehlungen zum Kundenwert?</strong><br>In der klassischen Formel nicht, sie zählt nur die eigenen Rechnungen eines Kunden. Bei Dienstleistern kann der Wert aus Empfehlungen aber gleich gross oder grösser sein als der Umsatz des Kunden selbst. Halten Sie deshalb bei jedem Neukunden fest, wer ihn empfohlen hat.</p><p><strong>Welche Akquisekosten werden am häufigsten vergessen?</strong><br>Die Zeit des Inhabers. Erstgespräche, Folgegespräche, Offerten und unbezahlte Vorarbeit tauchen in keiner Werbeabrechnung auf und werden deshalb leicht übersehen. Besonders teuer sind Interessenten, die lange brauchen, um sich zu entscheiden.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fazit",
      title: "Fazit: Rechnen ja, aber den ganzen Kunden",
    },
    {
      type: "richText",
      html: '<p>Die 3:1-Regel trifft einen wahren Kern, denn wer für Kunden mehr ausgibt, als er mit ihnen verdient, verliert Geld. Bei KMU, die Dienstleistungen verkaufen, liegt ein grosser Teil des Werts aber ausserhalb der ersten Rechnung: in wachsenden Budgets, in sinkendem Aufwand und in Empfehlungen. Wer nur das erste Mandat rechnet, spart womöglich genau bei den Kunden, die am meisten bringen.</p><p>Wenn Sie wissen möchten, wie viel Ihrer Neukunden heute über bestehende Kunden kommen und wie Sie diesen Weg gezielt stärken, <a href="/kontakt">sprechen Sie mit uns</a>.</p>',
    },
  ],
} satisfies IBlog
