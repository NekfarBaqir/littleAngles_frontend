import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the Little Angels NFT collections?",
    answer:
      "Its a collection of 5555 Little Angels, which come on the Ethereum Blockchain the rescue of human beings! ",
  },
  {
    question: "When the minting day?",
    answer: "Its on Tuesday, December 5",
  },
  {
    question: "What is the next phase of the project!",
    answer:
      "The next phase of our project is to bring the Goodness Token and Staking to th project!",
  },
  {
    question: "What is the prize for top holders?",
    answer:
      "In the second next phase we have gatherings and event and will air drop the top holder of our project! Its 1ETH and 1000 Goodness Token.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqSection() {
  return (
    <div className="bg-transparent" id="faq">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
