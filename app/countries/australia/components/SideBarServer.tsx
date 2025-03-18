import { Sidebarclient } from './SideBarClient'

export default function SideBarServer() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-rose-100 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
        Get Your Free Consultation
      </h3>
      <Sidebarclient />
    </div>
  )
}