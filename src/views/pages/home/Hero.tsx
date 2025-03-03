"use client";

const Hero = ({ title }: { title: string }) => {
  return (
    <div className="py-12 container mx-auto text-section text-center bg-center">
      <br />
      <br />
      <br />
      <br />
      <div className="hero px-4">
        <div className="container mx-auto py-2 text-center font-bold text-primary-500 text-[34px] md:text-[40px]">
          {title}
        </div>

        {/* <div className="container text-[#666D80] mx-auto text-center text-black-500 text-xl max-w-2xl mt-4">
          با تجربه‌ای ده‌ساله ما همراه شما هستیم تا با تحلیل‌های دقیق و خدمات
          اختصاصی، مسیر موفقیت شما را هموار کنیم.
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
