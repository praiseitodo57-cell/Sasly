"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "What services does your fintech agency provide?",
    content:
      "Our return policy allows you to return unworn and unwashed items within 5 days of purchase for a full refund or exchange 45 Please see our return policy page for full details and instructions.",
  },
  {
    value: "item-2",
    trigger: "How do you ensure the security of financial data?",
    content:
      "Our return policy allows you to return unworn and unwashed items within 5 days of purchase for a full refund or exchange 45 Please see our return policy page for full details and instructions.",
  },
  {
    value: "item-3",
    trigger: "What is your experience in developing fintech applications?",
    content:
      "Our return policy allows you to return unworn and unwashed items within 5 days of purchase for a full refund or exchange 45 Please see our return policy page for full details and instructions.",
  },
  {
    value: "item-4",
    trigger: "How do you approach a new fintech project?",
    content:
      "Our return policy allows you to return unworn and unwashed items within 5 days of purchase for a full refund or exchange 45 Please see our return policy page for full details and instructions.",
  },
  {
    value: "item-5",
    trigger: "How can I get started with your fintech services?",
    content:
      "Our return policy allows you to return unworn and unwashed items within 5 days of purchase for a full refund or exchange 45 Please see our return policy page for full details and instructions.",
  },
]

export default function AccordionBasic() {
  return (
    <Accordion type="single" collapsible className="space-y-5">
      {items.map((item, index) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-lg border px-9"
        >
          <AccordionTrigger className="text-left font-semibold text-xl">
            {String(index + 1).padStart(2, "0")}. {item.trigger}
          </AccordionTrigger>

          <AccordionContent className="text-gray-600 text-xl">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
