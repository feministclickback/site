---
title: "Interne Verlinkung"
date: 2020-08-25T15:05:16+02:00
draft: false
categories: ["SEO erklärt"]
description: "Die interne Verlinkung ist bei den meisten Webseiten die größte SEO-Baustelle. Doch warum interessieren sich Suchmaschinen für interne Links?"
---
Die interne Verlinkung ist bei den meisten Webseiten die größte SEO-Baustelle. Mit interner Verlinkung ist der Aufbau einer Webseite gemeint – wie die einzelnen Unterseiten aufeinander verlinken.

## Warum interessieren sich Suchmaschinen für interne Links?

Suchmaschinen nutzen spezielle Computerprogramme – sogenannte Crawler – um Webseiten zu analysieren und zu entscheiden, welche Unterseiten im Katalog der Suchmaschine (Index) landen und welche nicht. Damit die Indexierung funktioniert, müssen zwei Kriterien gegeben sein:

- Die Unterseiten müssen Inhalte haben, die Crawler verstehen können – das bedeutet sinnvoll aufgebaute Texte mit Keywords.
- Crawler müssen alle Unterseiten erreichen können – die Unterseiten müssen crawlbar sein.

In diesem Artikel beschäftigen wir uns mit dem zweiten Kriterium – der Crawlbarkeit.

## Wann können Suchmaschinen Unterseiten nicht crawlen?

Die Crawler von Suchmaschinen folgen Links, um Unterseiten zu finden. Unterseiten müssen also von irgendwo verlinkt sein, um gefunden zu werden. Probleme können zum Beispiel in folgenden Fällen auftauchen:

- Unterseiten sind verwaist, das heißt sie werden auf der Webseite nirgendwo mehr verlinkt und sind damit für Crawler nicht sichtbar. Dies kann zum Beispiel passieren, wenn die Paginierung eines Blogs nicht richtig aufgesetzt ist, und alte Beiträge irgendwann nicht mehr angezeigt werden.
- Inhalte sind nur über eine interne Suche auffindbar (und Crawler können keine Suche starten, um Inhalte zu finden).
- Die Links einer Webseite sehen für Nutzer:innen zwar so aus wie Links, aber sie haben nicht die klassische HTML-Struktur (<a href=“….“>), wie sie Suchmaschinen verstehen, sondern nutzen eine andere Technologie wie Javascript. In diesem Fall kommt es auf die konkrete Umsetzung an, ob Suchmaschinen die Links verstehen und ihnen folgen können.

Nehmen wir nun an, eine Webseite hat keines dieser Probleme, das heißt alle Unterseiten sind voll crawlbar. Auch dann gibt es zur internen Verlinkung einiges zu beachten.

## Wie interpretieren Suchmaschinen interne Links?

- Eine Unterseite wird von anderen Unterseiten sehr oft verlinkt, hat also viele interne Links. → Diese Unterseite wird von Suchmaschinen als besonders wichtig eingestuft. Die Seite, die in der Regel am häufigsten verlinkt wird, ist die Startseite. Nehmen wir an, die Startseite bekommt einen „Wert“ (link value) von 1. Alle Unterseiten, die direkt von der Startseite verlinkt werden, bekommen einen Wert von 0,5. Alle Seiten, die wiederum von dort verlinkt werden, bekommen einen Wert von 0.25, usw. Wird eine Unterseite von vielen Unterseiten verlinkt, bekommt sie noch etwas Wert hinzu, je nachdem, wie hoch der Wert der Seite ist, von der der Link kommt. Dieses Konzept nennt sich „PageRank“. Diese Zahlen dienen hier lediglich der Veranschaulichung – tatsächlich vergibt Google mittlerweile keine „Punkte“ mehr für PageRank. Das grundlegende Konzept ist aber weiterhin ein wichtiger Teil des Algorithmus.
- Einige Unterseiten sind untereinander besonders häufig verlinkt, z.B. alle Seiten zum Oberthema „Schwangerschaftsabbruch“. → Suchmaschinen analysieren die Beziehung zwischen diesen Unterseiten. Sie gehören thematisch zusammen. Gibt es viele Unterseiten zu einem Thema, ist dies ein positives Ranking-Signal.

## Wie muss eine Website aufgebaut sein, damit sie den SEO-Anforderungen entspricht?

1. Die ideale Struktur ist eine Baumstruktur oder Pyramide: Von der Startseite führen Links auf die wichtigsten Unterseiten, und von dort aus führen weitere Links zu den einzelnen Unterthemen (vom Allgemeinen ins Detail):
{{< figure src="/images/baumstruktur.jpg" alt="Diagramm einer Baumstruktur">}}

2. Verlinkt wichtige Seiten häufiger als andere, und zwar nicht im Footer oder in der Navigation, sondern durch Textlinks. Wenn ihr in einem Beitrag ein Thema erwähnt, zu dem es anderswo auf der Webseite einen ausführlicheren Text gibt, verlinkt diesen Text von dort. Dies ist auch für Nutzer:innen nützlich: Sie können so gezielt zu den Themen navigieren, die sie am meisten interessieren, ohne viel suchen zu müssen. Eine einfache Methode, um Abschnitte zu finden, die ein Thema erwähnen, ist eine Google-site:-Suche. Das bedeutet: ihr gebt in Google site:eure-website.de ein, gefolgt von dem Thema, zu dem ihr Erwähnungen finden wollt. Eine Suche nach „site:eure-website.de schwangerschaftsabbruch“ gibt euch eine Übersicht, auf welchen Unterseiten das Keyword Schwangerschaftsabbruch erwähnt wird.

## Doch Vorsicht:
- Übertreibt es mit der Optimierung nicht – es ist gut, wenn ihr bei Erwähnungen eines Thema auf die dazugehörige Unterseite verlinkt, aber es wäre zu viel, jedes Mal, wenn das Thema auch nur ansatzweise gestreift wird, einen Link zu setzen. Wenn ihr die site-Suche von oben verwendet, setzt Links nur bei den ersten 1-4 Ergebnissen der Suche. Ihr riskiert ansonsten eine „Abstrafung“ durch Google für Überoptimierung.
- Menüs und Footer-Links sind dafür gedacht, dass Nutzer:innen die Seite möglichst einfach navigieren können. Sie sind nicht dafür gedacht, hier Links auf wichtige Unterseiten zu platzieren, damit diese einen höheren PageRank erzielen. Diese Taktik sieht man manchmal noch auf Webseiten: im Footer befindet sich dann eine lange Liste zu allen möglichen Unterseiten. Auch dies riskiert eine Abstrafung. Wenn es um die Frage geht, welche Unterseiten in die Hauptnavigation, Sidebar, oder Footer aufgenommen werden sollen, entscheidet nicht vorrangig nach SEO-Kriterien, sondern danach, was für Nutzer:innen am meisten Sinn macht.

## Fazit
Suchmaschinen nutzen interne Links, um den Aufbau von Webseiten zu verstehen. Die interne Verlinkung gibt Suchmaschinen wichtige Hinweise zum Kontext und Relevanz von Unterseiten. Jede SEO-Strategie sollte damit beginnen, den Aufbau einer Webseite genauer zu prüfen und ggf. anzupassen.

## Zum Weiterlesen

- {{< target-blank "https://ahrefs.com/blog/internal-links-for-seo/" "https://ahrefs.com/blog/internal-links-for-seo/" >}}
- {{< target-blank "http://infolab.stanford.edu/~backrub/google.html" "http://infolab.stanford.edu/~backrub/google.html" >}}
- {{< target-blank "https://yoast.com/internal-linking-for-seo-why-and-how/" "https://yoast.com/internal-linking-for-seo-why-and-how/" >}}
