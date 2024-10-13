  import { Button } from "@/components/ui/button"

  export default function Component() {
    return (
      <div className="w-full bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] text-white py-16 mt-[100px] px-4 text-center">
        <h2 className="text-4xl font-normal mb-2">Join the Info team!</h2>
        <p className="text-xl font-light mb-8">
          Do you want to be part of the Info services team?
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-white text-black hover:bg-purple-200 font-normal px-8 py-2 rounded-full text-lg"
        >
          Join Team!
        </Button>
      </div>
    )
  }