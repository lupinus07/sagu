import { writeFileSync } from "node:fs";
import { calculateSaju } from "../lib/saju/calculateSaju";
const chart = calculateSaju({ year: 1988, month: 3, day: 15, hour: 0, minute: 25, gender: "female", referenceDate: new Date(2026, 9, 11) });
writeFileSync("data/samples/career.chart.json", JSON.stringify(chart, null, 2));
console.log(chart.day.tenGod, chart.year.tenGod, chart.elementCounts);
