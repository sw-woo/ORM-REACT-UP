import "./App.css";
import React, {useState, Fragment} from "react";
import {Dialog, Disclosure, Popover, Transition} from "@headlessui/react";
import {ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid";

const products = [
	{name: "Analytics", description: "Get a better understanding of your traffic", href: "#", icon: ChartPieIcon},
	{name: "Engagement", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon},
	{name: "Security", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon},
	{name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon},
	{name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon},
];
const callsToAction = [
	{name: "Watch demo", href: "#", icon: PlayCircleIcon},
	{name: "Contact sales", href: "#", icon: PhoneIcon},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function App() {
	const [links, setLinks] = useState([
		{name: "Open roles", href: "#"},
		{name: "Internship program", href: "#"},
		{name: "Our values", href: "#"},
		{name: "Meet our leadership", href: "#"},
	]);
	const stats = [
		{name: "Offices worldwide", value: "12"},
		{name: "Full-time colleagues", value: "300+"},
		{name: "Hours per week", value: "40"},
		{name: "Paid time off", value: "Unlimited"},
	];
	const stats2 = [
		{id: 1, name: "Transactions every 24 hours", value: "44 million"},
		{id: 2, name: "Assets under holding", value: "$119 trillion"},
		{id: 3, name: "New users annually", value: "46,000"},
	];
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<>
			<header className="bg-white">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
						</a>
					</div>
					<div className="flex lg:hidden">
						<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<Popover.Group className="hidden lg:flex lg:gap-x-12">
						<Popover className="relative">
							<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
								Product
								<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
									<div className="p-4">
										{products.map((item) => (
											<div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
												</div>
												<div className="flex-auto">
													<a href={item.href} className="block font-semibold text-gray-900">
														{item.name}
														<span className="absolute inset-0" />
													</a>
													<p className="mt-1 text-gray-600">{item.description}</p>
												</div>
											</div>
										))}
									</div>
									<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
										{callsToAction.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
											>
												<item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
												{item.name}
											</a>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Features
						</a>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Marketplace
						</a>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Company
						</a>
					</Popover.Group>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</nav>
				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
							</a>
							<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<Disclosure as="div" className="-mx-3">
										{({open}) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Product
													<ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...products, ...callsToAction].map((item) => (
														<Disclosure.Button
															key={item.name}
															as="a"
															href={item.href}
															className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
														>
															{item.name}
														</Disclosure.Button>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Features
									</a>
									<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Marketplace
									</a>
									<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Company
									</a>
								</div>
								<div className="py-6">
									<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Log in
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<img
					src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
					alt=""
					className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				/>
				<div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<a key={link.name} href={link.href}>
									{link.name} <span aria-hidden="true">&rarr;</span>
								</a>
							))}
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
							{stats.map((stat) => (
								<div key={stat.name} className="flex flex-col-reverse">
									<dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
									<dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Reform"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Tuple"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Statamic"
							width={158}
							height={48}
						/>
					</div>
				</div>
			</div>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						{stats2.map((stat) => (
							<div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</>
	);
}

export default App;
