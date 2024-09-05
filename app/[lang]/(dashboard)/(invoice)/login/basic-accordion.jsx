import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BasicAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full border-b rounded-md">
      
      {/* FAQ Item 1 with Nested Dropdown */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-black font-semibold py-2">
          How To Compare Updated Speed With Old Speed
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray-200 p-1">
          <Accordion type="single" collapsible>
            <AccordionItem value="subitem-1">
              <AccordionTrigger className="text-black text-sm py-1 px-2">
                Google Page Speed Insights
              </AccordionTrigger>
              <AccordionContent className="px-4 py-1">
                Instructions for using Google Page Speed Insights to compare speeds.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-2">
              <AccordionTrigger className="text-black text-sm py-1 px-2">
                GTmetrix
              </AccordionTrigger>
              <AccordionContent className="px-4 py-1">
                Steps to compare speeds using GTmetrix.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-3">
              <AccordionTrigger className="text-black text-sm py-1 px-2">
                Pingdom
              </AccordionTrigger>
              <AccordionContent className="px-4 py-1">
                Guide to using Pingdom for speed comparison.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-4">
              <AccordionTrigger className="text-black text-sm py-1 px-2">
                Webpagetest
              </AccordionTrigger>
              <AccordionContent className="px-4 py-1">
                Instructions for using Webpagetest to compare speeds.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>

      {/* FAQ Item 2 */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-black font-semibold py-2">
          Why Your Score Fluctuates?
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray-200 py-2">
          Score fluctuations are normal due to various external factors, including server load and network speed.
        </AccordionContent>
      </AccordionItem>

      {/* FAQ Item 3 */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-black font-semibold py-2">
          Will Website Speedy Work For All Pages Of My Website?
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray-200 py-2">
          Yes, Website Speedy optimizes all pages on your website automatically.
        </AccordionContent>
      </AccordionItem>

      {/* FAQ Item 4 */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-black font-semibold py-2">
          Does Website Speedy Provide A Speed Guarantee?
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray-200 py-2">
          While we guarantee improvements in speed, specific results depend on your website's current condition.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BasicAccordion;
