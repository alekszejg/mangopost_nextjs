import PageWrapper from '@/Components/Layout/fullPage';
import { LanguageType } from "@/app/layout";


export default function PrivacyLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageBody: {
            en: "mx-6 tablet:mx-16 ultrawide:mx-24",
            de: "mx-6 tablet:mx-16 ultrawide:mx-24"
        },
        container: "mt-10 pb-40 break-words",
        headers: "mb-3 text-lg font-jost-bold",
        lists: "list-square pl-10 mb-6",
        links: "underline text-[#0000EE] visited:text-[#551A8B]",
        emails: "underline text-[#0000EE] visited:text-[#551A8B]"
    }

    return (
        <PageWrapper language={language} margins={styling.pageBody[language]}>
            <div id="privacyPolicyContainer" className={styling.container}>
                <h2 className={styling.headers}>Informationen zur Datenverarbeitung gemäß Art. 13 DSGVO</h2>
                <p className="mb-3">Diese Informationen zur Datenverarbeitung gelten für das Internetangebot der Gastroexpress GmbH, welches unter der 
                    Domain <a className={styling.links} href="shop.mangopost.app" target="_blank" rel="noopener noreferrer">shop.mangopost.app</a> sowie den verschiedenen Subdomains („unsere Webseite“) erreichbar ist. Zudem möchten 
                    wir auch darüber informieren, wie wir personenbezogene Daten, die wir über andere Wege erhalten haben, speichern und nutzen.
                </p>
                <p className="mb-6">Die Firma Gastroexpress GmbH lehnt sich im Speziellen an die EU Datenschutz-Grundverordnung sowie an das aktuelle 
                Bundesdatenschutzgesetz (BDSG) an. Bei der Internetnutzung orientieren wir uns zum Schutz Ihrer personenbezogenen Daten am 
                Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG) der Bundesrepublik Deutschland. Im Folgenden erläutern wir, welche 
                Informationen wir während Ihres Besuches auf unseren Webseiten erfassen und wie diese genutzt werden.
                </p>

                <h2 className={styling.headers}>Wer ist verantwortlich und wie erreiche ich Sie?</h2>
                <p className="mb-3">
                    Verantwortlicher für die Verarbeitung personenbezogener Daten im Sinne der EU-Datenschutz-Grundverordnung (DSGVO)
                </p>
                <p className="mb-3">Gastroexpress GmbH<br />Adresse: Rosenheimer Str. 30-32, 81669 München</p>
                <p className="mb-3">Telefon: +89 452 036 80<br />Email: <span className={styling.emails}>info@mangopost.app</span></p>
                <p><b>Datenschutzbeauftragte/r</b></p>
                <p className="mb-6"><i>Kontaktdaten, sofern vorhanden</i></p>

                <h2 className={styling.headers}>Worum geht es?</h2>
                <p className="mb-3">
                    Diese Datenschutzerklärung erfüllt die gesetzlichen Anforderungen an die Transparenz bei der Verarbeitung personenbezogener Daten. 
                    Dies sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Hierzu gehören beispielsweise 
                    Informationen wie Ihr Name, Ihr Alter, Ihre Anschrift, Ihre Telefonnummer, Ihr Geburtsdatum, Ihre E-Mail-Adresse, Ihre IP-Adresse oder das 
                    Nutzerverhalten beim Besuch einer Webseite. Informationen, bei denen wir keinen (oder nur mit einem unverhältnismäßigen Aufwand) Bezug zu 
                    Ihrer Person herstellen können, z.B. durch Anonymisierung, sind keine personenbezogenen Daten. Die Verarbeitung von personenbezogenen Daten 
                    (bspw. das Erheben, das Abfragen, die Verwendung, die Speicherung oder die Übermittlung) bedarf immer einer gesetzlichen Grundlage und eines 
                    definierten Zwecks.
                </p>
                <p className="mb-6">
                    Gespeicherte personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung erreicht wurde und es keine rechtmäßigen Gründe für 
                    eine weitere Aufbewahrung der Daten gibt. Wir informieren Sie in den einzelnen Verarbeitungsvorgängen über die konkreten Speicherfristen bzw. 
                    Kriterien für die Speicherung. Unabhängig davon, speichern wir Ihre personenbezogenen in Einzelfällen zur Geltendmachung, Ausübung oder Verteidigung 
                    von Rechtsansprüchen und bei Vorliegen gesetzlicher Aufbewahrungspflichten.
                </p>
                
                <h2 className={styling.headers}>Allgemeines zur Datenverarbeitung</h2>
                <p className="mb-3">
                    Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Webseite 
                    sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach 
                    Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich 
                    ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                </p>
                <p className="mb-3"><b>Rechtsgrundlage für die Verarbeitung personenbezogener Daten</b></p>
                <p className="mb-6">Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine</p>
                <ul className={styling.lists}>
                    <li><b>Einwilligung der betroffenen Person</b> einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.</li>
                    <li>
                        Bei der Verarbeitung von personenbezogenen Daten, die zur <b>Erfüllung eines Vertrages</b>, dessen Vertragspartei die betroffene Person ist, 
                        erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung 
                        vorvertraglicher Maßnahmen erforderlich sind.
                    </li>
                    <li>
                        Soweit eine Verarbeitung personenbezogener Daten zur <b>Erfüllung einer rechtlichen Verpflichtung</b> (gesetzliche Bestimmungen) erforderlich ist, der 
                        unser Unternehmen unterliegt (z.B. Bundesmeldegesetze), dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
                    </li>
                    <li>
                        Ist die Verarbeitung zur <b>Wahrung eines berechtigten Interesses</b> unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, 
                        Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für 
                        die Verarbeitung.
                    </li>
                </ul>
                <p><b>Datenlöschung und Speicherdauer</b></p>
                <p className="mb-6">
                    Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber 
                    hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen 
                    der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene 
                    Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                </p>

                <h2 className={styling.headers}>Wer bekommt meine Daten?</h2>
                <p className="mb-3">
                    Wir geben Ihre personenbezogenen Daten, die wir auf unserer Webseite verarbeiten nur dann an Dritte weiter, wenn dies für die Erfüllung der Zwecke 
                    erforderlich ist und im Einzelfall von der Rechtsgrundlage (z.B. Einwilligung oder Wahrung berechtigter Interessen) erfasst ist. Darüber hinaus geben 
                    wir im Einzelfall personenbezogene Daten an Dritte weiter, wenn dies der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient. Mögliche 
                    Empfänger können dann z.B. Strafverfolgungsbehörden, Rechtsanwälte, Wirtschaftsprüfer, Gerichte usw. sein.
                </p>
                <p className="mb-6">
                    Soweit wir für den Betrieb unserer Webseite Dienstleister einsetzen, die im Rahmen einer Auftragsverarbeitung in unserem Auftrag personenbezogene Daten 
                    gem. Art. 28 DSGVO verarbeiten, können diese Empfänger Ihrer personenbezogenen Daten sein. Nähere Informationen zum Einsatz von Auftragsverarbeitern sowie 
                    von Webdiensten erhalten Sie in der Übersicht der einzelnen Verarbeitungsvorgänge.
                </p>

                <h2 className={styling.headers}>Nutzung unseres Online-Stores</h2>
                <p className="mb-6">
                    Auf unserer Internetseite gibt es die Möglichkeit, in unseren Stores Produkte auszuwählen, zu kaufen und liefern zu lassen. Wenn Sie diese Möglichkeit wahrnehmen, 
                    so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:
                </p>
                <ul className={styling.lists}>
                    <li>Anrede, Vorname, Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer</li>
                    <li>Liefer- und oder Rechnungsanschrift</li>
                    <li>Privat/Firma</li>
                    <li>ggf. Name an der Klingel</li>
                    <li>ggf. Wegbeschreibung</li>
                    <li>Bestellung</li>
                    <li>Liefer- oder Abholtermin</li>
                    <li>Zahlungsdaten</li>
                    <li>ggf. Bemerkungen</li>
                </ul>
                <p className="mb-3">
                    Wenn Sie von unserer Webseite eine Bestellung vornehmen, so geschieht das durch das Online-Bestellsystem der SimplyDelivery GmbH (SIDES), 
                    Wilhelm-Kabus-Straße 70/Haus 34.3, 10829 Berlin, Deutschland. Alle von Ihnen eingegebenen Bestelldaten werden verschlüsselt übertragen. Unser Vertragspartner 
                    hat sich zum datenschutzgerechten Umgang mit Ihren übermittelten Daten verpflichtet. Er ergreift alle organisatorischen und technischen Maßnahmen zum Schutz Ihrer 
                    Daten. Weitere Hinweise zum Datenschutz entnehmen Sie bitte der <a className={styling.links} href="https://www.get-sides.de/datenschutz/" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> von SIDES.
                </p>
                <p className="mb-3">
                    Die übermittelten Daten werden in unserem internen Bestellsystem gespeichert und zur Vertragsdurchführung genutzt. So wird im nächstgelegenen oder 
                    ausgewählten Store die Bestellung übernommen und zusammengestellt. Sofern Sie sich dafür entschieden haben, Ihre Bestellung liefern zu lassen, erhalten 
                    unsere Fahrer alle für sie benötigten Informationen.
                </p>
                <p><b>Zweck und Rechtsgrundlage</b></p>
                <p className="mb-3">
                    Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Bestellung und zur Abwicklung des Zahlungsverkehrs. 
                    Rechtsgrundlage für die Verarbeitung der Daten ist der Abschluss eines Kaufvertrages gem. Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p><b>Dauer der Speicherung</b></p>
                <p className="mb-3">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Bei einem Vertragsverhältnis werden wir die 
                    erhaltenen Daten löschen, sobald nationale, handelsrechtliche, satzungsmäßige oder vertragliche Aufbewahrungsvorschriften erfüllt sind. So werden wir die 
                    Bestell- und Zahlungsdaten nach 10 Jahren löschen bzw. anonymisieren.
                </p>
                <p><b>Widerspruchsmöglichkeit</b></p>
                <p className="mb-6">
                    Sie haben jederzeit die Möglichkeit, der Verarbeitung Ihrer Daten zu widersprechen. Hierfür wenden Sie sich bitte direkt an die verantwortliche Stelle, 
                    also dem Storebetreiber. Wir weisen darauf hin, dass im Fall eines Widerspruchs zukünftig keine Bestellung vornehmen können, wenn wir Ihren Online-Account 
                    sperren sollen.
                </p>

                <h2 className={styling.headers}>Welche Rechte haben Sie?</h2>
                <p className="mb-6">
                    Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>
                <ul className={styling.lists}>
                    <li>
                        Sie haben ein <b>Recht auf Auskunft</b> über die zu Ihrer Person gespeicherten personenbezogenen Daten, über die Zwecke der Verarbeitung, über eventuelle 
                        Übermittlungen an andere Stellen und über die Dauer der Speicherung.
                    </li>
                    <li>
                        Sollten Daten unrichtig sein oder für die Zwecke, für die sie erhoben worden sind, nicht mehr erforderlich sein, können Sie 
                        die <b>Berichtigung</b>, <b>Löschung</b> oder <b>Einschränkung</b> der Verarbeitung verlangen. Soweit in den Verarbeitungsverfahren vorgesehen, können Sie Ihre Daten auch selbst einsehen und ggf. korrigieren.
                    </li>
                    <li>
                        Sollten sich aus Ihrer besonderen persönlichen Situation Gründe gegen eine Verarbeitung Ihrer personenbezogenen Daten ergeben, können Sie, soweit die 
                        <b>Verarbeitung</b> auf ein berechtigtes Interesse gestützt ist, dieser widersprechen. Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen 
                        Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, 
                        oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                    </li>
                    <li>
                        Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um <b>Direktwerbung</b> zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die 
                        Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit 
                        solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung oder <b>Profiling</b>, so werden die Sie betreffenden 
                        personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
                    </li>
                </ul>
                <p className="mb-3">
                    Sie haben das Recht, <b>Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen</b>. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit, 
                    der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
                <p className="mb-6">
                    Bei Fragen zu Ihren Rechten und zur Wahrnehmung Ihrer Rechtewenden Sie sich bitte an die Geschäftsleitung oder den Datenschutzbeauftragten.
                </p>

                <h2 className={styling.headers}>Ihr Recht auf Beschwerde bei einer Aufsichtsbehörde</h2>
                <p className="mb-3">
                    Als betroffene Person haben Sie unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer 
                    Aufsichtsbehörde für Datenschutz, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, 
                    dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen den Datenschutz verstößt.
                </p>
                <p className="mb-3">
                    Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wird, unterrichtet Sie über den Stand und die Ergebnisse Ihrer Beschwerde einschließlich der 
                    Möglichkeit eines gerichtlichen Rechtsbehelfs.
                </p>
                <p className="mb-6">
                    Mehr Informationen finden Sie auf der Internetseite des Bundesbeauftragten für den Datenschutz und die Informationsfreiheit. Folgen Sie 
                    dem <a className={styling.links} href="https://www.bfdi.bund.de/DE/Service/Kontakt/Beschwerdeformular/Info_OnlineBeschwerde.html" target="_blank" rel="noopener noreferrer">Link</a>.
                </p>

                <h2 className={styling.headers}>Datenverarbeitung außerhalb der Europäischen Union</h2>
                <p className="mb-3">Soweit personenbezogene Daten außerhalb der europäischen Union verarbeitet werden, können Sie dies den vorherigen Ausführungen entnehmen.</p>
                <p className="mb-3">
                    Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also 
                    insbesondere in den USA) oder einer Datenweitergabe dorthin verwenden wir sogenannte EU-Standardvertragsklauseln in der Version von 2021. 
                </p>
                <p className="mb-6">
                    EU-Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre 
                    Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert 
                    werden. Durch diese Klauseln verpflichten sich die Diensteanbieter, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, 
                    selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. 
                    Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln 
                    u.a. hier: <a className={styling.links} href="https://eurlex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="noopener noreferrer">https://eurlex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>.
                </p>

                <h2 className={styling.headers}>Sicherheit</h2>
                <p className="mb-3">
                    Wir setzen technische und organisatorische Sicherheitsmaßnahmen gemäß Art. 32 DSGVO ein, um Ihre durch uns verwalteten Daten gegen zufällige oder 
                    vorsätzliche Manipulationen, Verlust, Zerstörung oder vor dem Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend 
                    der technologischen Entwicklung fortlaufend verbessert. Der Zugriff darauf ist nur wenigen Befugten und zum besonderen Datenschutz verpflichteten 
                    Personen möglich, die mit der technischen, administrativen oder der redaktionellen Betreuung von Daten befasst sind.  
                </p>
                <p className="mb-6">
                    Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Webseite eine SSL-bzw. 
                    TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Webseite übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an 
                    der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                </p>

                <h2 className={styling.headers}>Änderungen der Datenschutzhinweise</h2>
                <p className="mb-6">
                    Wir überarbeiten diese Datenschutzhinweise bei Änderungen an dieser Internetseite oder bei sonstigen Anlässen, die dies erforderlich machen. 
                    Die jeweils aktuelle Fassung finden Sie stets auf dieser Internetseite.  
                </p>

                <h2 className={styling.headers}>Wie werden meine Daten im Einzelnen bei Nutzung des Online-Stores verarbeitet?</h2>
                <p className="mb-6">
                    Nachfolgend informieren wir Sie über die einzelnen Verarbeitungsvorgänge, den Umfang und den Zweck der Datenverarbeitung, die Rechtsgrundlage, 
                    die Pflicht zur Bereitstellung Ihrer Daten und die jeweilige Speicherdauer. Eine automatisierte Entscheidung im Einzelfall, einschließlich Profiling 
                    findet nicht statt.
                </p>

                <h2 className={styling.headers}>Bereitstellung der Webseite</h2>
                <p className="mb-6">
                    Bei Aufruf und Nutzung unserer Webseite erheben wir die personenbezogenen Daten, die Ihr Browser automatisch an unseren Server übermittelt. Die folgenden 
                    Informationen werden temporär in einem sog. Logfile gespeichert: 
                </p>
                <ul className={styling.lists}>
                    <li>IP-Adresse des anfragenden Endgerätes</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners, sowie der Name Ihres Access-Providers</li>
                </ul>
                <p className="mb-3">
                    Unsere Webseite wird nicht von uns selbst gehostet, sondern bei einem Dienstleister, der für den Zweck der die zuvor genannten Daten in unserem 
                    Auftrag gem. Art. 28 DSGVO verarbeitet.
                </p>
                <p><b>Zweck und Rechtsgrundlage</b></p>
                <p className="mb-3">
                    Die Verarbeitung erfolgt zur Wahrung unseres überwiegenden berechtigten Interesses zur Anzeige unserer Webseite und Gewährleistung der Sicherheit und 
                    Stabilität auf Grundlage des Art. 6 Abs. lit. f DSGVO. Die Erfassung der Daten und die Speicherung in Logfiles ist für den Betrieb der Webseite zwingend 
                    erforderlich. Ein Widerspruchsrecht gegen die Verarbeitung besteht aufgrund der Ausnahme nach Art. 21 Abs. 1 DSGVO nicht. Soweit die weitergehende 
                    Speicherung der Logfiles gesetzlich vorgeschrieben ist, erfolgt die Verarbeitung auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO. Es besteht keine gesetzliche 
                    oder vertragliche Pflicht zur Bereitstellung der Daten, allerdings ist der Aufruf unserer Webseite ohne Bereitstellung der Daten technisch nicht möglich.
                </p>
                <p><b>Speicherdauer</b></p>
                <p className="mb-6">
                    Die vorgenannten Daten werden für die Dauer der Anzeige der Webseite sowie aus technischen Gründen darüber hinaus für maximal 7 Tage gespeichert.
                </p>

                <h2 className={styling.headers}>Newsletter</h2>
                <p className="mb-3">
                    Sofern Sie sich auf unserer Webseite zum Empfang unseres Newsletters anmelden, erheben wir Ihre E-Mail-Adresse sowie Ihren Namen und speichern diese 
                    Informationen zusammen mit dem Datum der Anmeldung und Ihrer IP-Adresse. Im Anschluss erhalten Sie eine E-Mail, in der Sie die Anmeldung zum 
                    Newsletter bestätigen müssen (Double-Opt-in). Sollten Sie nicht die Anmeldung bestätigen, verfällt diese automatisch und die Daten werden nicht für den 
                    Newsletterversand verarbeitet.
                </p>
                <p>
                    Der Versand des Newsletters erfolgt direkt durch uns. Eine Weitergabe Ihrer Daten an Dritte oder Auftragsverarbeiter im Sinne des Art. 28 DSGVO erfolgt nicht.
                </p>
                <p className="mb-3"><i>
                    Alternativ: [Zum Versand des Newsletters nutzen wir einen Service der [Dienstleister], die Ihre personenbezogenen Daten in unserem Auftrag gem. 
                    Art. 28 DSGVO verarbeiten. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht.]
                </i></p>
                <p><b>Zweck und Rechtsgrundlage</b></p>
                <p className="mb-3">
                    Wir verarbeiten Ihre Daten zum Zweck des Newsletterversands auf Grundlage Ihrer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO. Durch Abmeldung vom 
                    Newsletter können Sie jederzeit mit Wirkung für die Zukunft Ihren Widerruf gem. Art. 7 Abs. 3 DSGVO erklären. Es besteht keine gesetzliche oder 
                    vertragliche Pflicht zur Bereitstellung Ihrer Daten, jedoch ist ein Versand des Newsletters ohne die Bereitstellung Ihrer Daten nicht möglich.
                </p>
                <p><b>Speicherdauer</b></p>
                <p className="mb-6">
                    Nach Anmeldung zum Newsletter speichern wir die Daten maximal 72 Stunden bis zur Bestätigung der Anmeldung. Nach erfolgreicher Bestätigung speichern 
                    wir Ihre Daten bis zum Widerruf Ihrer Einwilligung (Abmeldung vom Newsletter).
                </p>

                <h2 className={styling.headers}>Registrierung eines Kundenkontos</h2>
                <p className="mb-3">
                    Im Rahmen der Bestellabwicklung erheben wir Ihre personenbezogenen Daten zur Registrierung eines Kundenkontos. Sie können dabei wählen, ob Sie 
                    als Gast bestellen oder ein dauerhaftes Benutzerkonto registrieren möchten. Die Informationen, die während der Registrierung über die Pflichtfelder 
                    erhoben werden, sind in beiden Fällen identisch und für die Abwicklung der Bestellung im Onlinestore erforderlich. Bei Registrierung eines dauerhaften 
                    Benutzerkontos erheben wir zusätzlich ein von Ihnen selbst festgelegtes Passwort. Darüber hinaus können Sie freiwillig zusätzliche Informationen bereitstellen, 
                    die aus Ihrer Sicht für die Abwicklung der Bestellung erforderlich sind.
                </p>
                <p className="mb-3">
                    Eine Weitergabe Ihrer personenbezogenen Daten an Dritte (z.B. Lieferdienst) und Auftragsverarbeiter gem. Art. 28 DSGVO erfolgt nur soweit dies für 
                    die Abwicklung der Bestellung erforderlich ist.
                </p>
                <p><b>Zweck und Rechtsgrundlage</b></p>
                <p className="mb-3">
                    Wir verarbeiten Ihre personenbezogenen Daten zum Zweck der Registrierung eines Kundenkontos zur Erfüllung eines Vertrags mit Ihnen gem. Art. 6 Abs. 
                    1 lit. b DSGVO. Es besteht eine vertragliche Pflicht zur Bereitstellung Ihrer Daten soweit es sich auf die Pflichtfelder bezieht, da diese Informationen 
                    zur Identifizierung Ihrer Person sowie zur Vertragserfüllung unsererseits erforderlich sind. Eine gesetzliche Pflicht zur Bereitstellung der Daten besteht 
                    nicht. Ohne die Bereitstellung dieser Informationen ist die Bestellung in unserem Onlinestore und somit ein Vertragsschluss nur als Gast möglich. Für 
                    die zusätzlich freiwillig angegebenen Informationen besteht keine Pflicht zur Bereitstellung. Die Bestellung in unserem Onlinestore ist auch ohne die 
                    Preisgabe der freiwilligen Angaben möglich.
                </p>
                <p className="mb-3">
                    Die ergänzende Verarbeitung Ihres Passworts zur Registrierung des dauerhaften Benutzerkontos erfolgt zum Zweck der Bereitstellung eines Kundenkontos 
                    und zur Darstellung Ihrer bisherigen Käufe sowie zur Speicherung Ihrer kaufbezogenen Daten (z.B. Speicherung von Rechnungsanschrift, verschiedene 
                    Lieferanschriften) auf Grundlage Ihrer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO. Durch die Löschung Ihres Kundenkontos können Sie jederzeit mit 
                    Wirkung für die Zukunft Ihren Widerruf gem. Art. 7 Abs. 3 DSGVO erklären.
                </p>
                <p><b>Speicherdauer</b></p>
                <p className="mb-6">
                    Wenn Sie als Gast bestellen, speichern Ihre personenbezogenen Daten bis zur vollständigen Abwicklung Ihrer Bestellung (Vertragsende). Bei Registrierung 
                    eines dauerhaften Kundenkontos speichern wie die kaufbezogenen Daten über das Ende des Vertrages hinaus, bis zum Widerruf Ihrer Einwilligung 
                    (Löschen des Kundenkontos). In beiden Fällen erfolgt eine weitere Speicherung Ihrer Daten nur, sofern gesetzliche Aufbewahrungspflichten (zum Beispiel 
                    Steuer- und Handelsrecht) bestehen. 
                </p>

                <h2 className={styling.headers}>Zahlungsdienstleister</h2>
                <p><b>Stripe</b></p>
                <p className="mb-3">
                    Wir verwenden auf unserer Website ein Zahlungstool des amerikanischen Online-Bezahldienstes Stripe für die EC-Zahlung. Für Kunden innerhalb von der 
                    EU ist Stripe Payments Europe (Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland) verantwortlich. Das heißt, wenn Sie sich für 
                    EC-Zahlung als Zahlungsart entscheiden, wird Ihre Zahlung über Stripe Payments abgewickelt. Dabei werden Daten, die für den Zahlungsvorgang nötig sind, 
                    an Stripe weitergeleitet und gespeichert. Nachfolgend geben wir Ihnen einen Überblick über diese Datenverarbeitung und Speicherung durch Stripe und erklären, 
                    warum wir Stripe auf unserer Website verwenden.  
                </p>
                <p className="mb-3">
                    Mit Stripe ist es möglich, EC- und Debitkartenzahlungen in unserem Onlinestore zu akzeptieren. Stripe übernimmt den gesamten Zahlungsvorgang. 
                    Der Zahlungsvorgang wird über unsere Website bzw. den Store abgewickelt.
                </p>
                <p className="mb-3">
                    Wir wollen natürlich mit unserer Website und unserem eingebundenen Onlinestore den bestmöglichen Service bieten, damit Sie sich auf unserer Seite 
                    wohl fühlen und unsere Angebote nutzen. Wir wissen, dass Ihre Zeit kostbar ist und daher speziell Zahlungsabwicklungen schnell und reibungslos funktionieren 
                    müssen. Neben unseren anderen Zahlungsanbietern haben wir mit Stripe einen Partner.
                </p>
                <p className="mb-3">
                    Wenn Sie sich für Stripe als Zahlungsart entscheiden, werden auch personenbezogene Daten von Ihnen an Stripe übermittelt und dort gespeichert. Dabei 
                    handelt es sich um Transaktionsdaten. Zu diesen Daten zählen etwa die Zahlungsmethode (also Kreditkarten- Debitkarten oder Kontonummer), Bankleitzahl, 
                    Währung, der Betrag und das Datum der Zahlung. Bei einer Transaktion kann weiters Ihr Name, Ihre E-Mail-Adresse, Ihre Rechnungs- oder Versandadresse 
                    und manchmal auch Ihr Transaktionsverlauf übermittelt werden. Diese Daten sind zur Authentifizierung nötig. Weiters kann Stripe zur Betrugsabwehr, der 
                    Finanzberichterstattung und um die eigenen Dienste vollständig anbieten zu können, auch neben technischen Daten zu Ihrem Gerät (wie IP-Adresse) Name, 
                    Adresse, Telefonnummer und Ihr Land erfassen. 
                </p>
                <p className="mb-3">
                    Stripe verkauft keine Ihrer Daten an unabhängige Dritte, wie etwa Marketingagenturen oder andere Unternehmen, die mit dem Stripe-Unternehmen nichts 
                    zu tun haben. Die Daten können aber etwa an interne Abteilungen, einer beschränkten Anzahl externer Stripe-Partner oder zur Einhaltung gesetzlicher 
                    Vorschriften weitergeleitet werden. Stripe verwendet zur Erfassung von Daten auch Cookies.
                </p>
                <p className="mb-3">
                    Bitte beachten Sie, dass bei der Verwendung von Stripe Daten von Ihnen auch außerhalb der EU gespeichert und verarbeitet werden können. Die 
                    meisten Drittstaaten (darunter auch die USA) gelten nach derzeitigem europäischen Datenschutzrecht als nicht sicher. Daten an unsichere Drittstaaten 
                    dürfen also nicht einfach übertragen, dort gespeichert und verarbeitet werden, sofern es keine passenden Garantien (wie etwa EU- Standardvertragsklauseln) 
                    zwischen uns und dem außereuropäischen Dienstleister gibt. Sie haben immer das Recht auf Auskunft, Berichtigung und Löschung Ihrer personenbezogenen 
                    Daten. Bei Fragen können Sie auch jederzeit das Stripe-Team 
                    über <a className={styling.links} href="https://support.stripe.com/contact/login?redirected=true" target="_blank" rel="noopener noreferrer">https://support.stripe.com/contact/email</a> kontaktieren.
                </p>
                <p><b>Zweck und Rechtsgrundlage</b></p>
                <p className="mb-3">Wir bieten zur Abwicklung von vertraglichen bzw. rechtlichen Beziehungen (Art. 6 Abs. 1 lit. b DSGVO) den Zahlungsdienstleister Stripe an.</p>
                <p className="mb-3">
                    Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. 
                    Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.
                </p>
                <p><b>Speicherdauer</b></p>
                <p className="mb-3">
                    Personenbezogene Daten werden grundsätzlich für die Dauer der Diensterbringung gespeichert. Das heißt, die Daten werden so lange gespeichert, 
                    bis wir die Zusammenarbeit mit Stripe auflösen. Um allerdings die gesetzlichen und behördlichen Pflichten zu erfüllen kann Stripe auch über die Dauer 
                    der Diensterbringung personenbezogene Daten speichern. Da Stripe ein weltweit tätiges Unternehmen ist, können die Daten auch in jedem Land, wo 
                    Stripe Dienstleistungen anbietet, gespeichert werden.
                </p>
                <p className="mb-3">
                    Cookies, die Stripe für ihre Funktionen verwenden, können Sie in Ihrem Browser löschen, deaktivieren oder verwalten. Je nachdem welchen Browser 
                    Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise.
                </p>
                <p className="mb-3">
                    Weitere Hinweise finden Sie in der <a className={styling.links} href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> für Stripe.
                </p>
                <p>
                    Mehr Informationen zu den Standardvertragsklauseln und über die Daten, die durch die Verwendung von Stripe verarbeitet werden, erfahren Sie in der 
                    Privacy Policy auf <a className={styling.links} href="https://stripe.com/at/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/at/privacy</a>.
                </p>
            </div>
        </PageWrapper>
    );
}