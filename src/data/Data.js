import { PhoneIcon, PlayIcon, CodeBracketIcon, UserPlusIcon, PhotoIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const headerData = {
  solutions : [
    {name: 'Strategy Development', description: 'Develop and implement effective strategies to achieve business goals', icon: PresentationChartBarIcon},
    {name: 'Web Development', description: 'Design, develop and maintain high-performing websites that drive conversions', icon: CodeBracketIcon},
    {name: 'Product Ideation', description: 'Generate and evaluate new product ideas to meet customer needs', icon: PhotoIcon},
    {name: 'Task Execution', description: 'Provide support and guidance to help execute on tasks and achieve desired outcomes', icon: UserPlusIcon},
  ],
  callsToAction : [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  
}

export default headerData