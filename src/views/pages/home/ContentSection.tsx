import Image from "next/image";

const ContentSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mb-[-100px] md:mb-[-40px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="rounded-2xl bg-white md:border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              بازار سرمایه
            </div>
            <div className="my-6 text-xl font-bold">
              واریز سود 25 نماد دارویی
            </div>
            <div>
              بیش از ۱۶۰۰ میلیارد تومان سود، در ۲ هفته پایانی بهمن ماه سال جاری
              از طریق اطلاعات سامانه سجام برای یک میلیون و ۸۰۷ هزار سهامدار
              واریز شد.
            </div>
          </div>
          <div className="w-full h-80 overflow-hidden">
            {/* تغییر ارتفاع تصویر */}
            <Image
              src="/images/boors.jpg"
              alt="section"
              width={512}
              height={512}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="rounded-2xl bg-white md:border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              تحلیل
            </div>
            <div className="my-6 text-xl font-bold">
              طلا تا پایان سال چه رفتاری از خود نشان خواهد داد؟
            </div>
            <div>
              طلا همیشه یکی از جذاب‌ترین گزینه‌های سرمایه‌گذاری است و این روز‌ها
              بیش از پیش به جذابیت آن افزوده شده است و افراد برای این که بتوانند
              دارایی خود را حفظ کنند تلاششان بر این است که طلا را به عنوان یک
              گزینه امن انتخاب کنند
            </div>
          </div>
          <div className="w-full h-80 overflow-hidden">
            {" "}
            {/* تغییر ارتفاع تصویر */}
            <Image
              src="/images/boors2.jpg"
              alt="section"
              width={512}
              height={512}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="rounded-2xl bg-white md:border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              بورس کالا
            </div>
            <div className="my-6 text-xl font-bold">
              در نشست خبری سید جواد جهرمی مدیرعامل بورس کالای ایران چه گذشت؟
            </div>
            <div>
              نشست خبری مدیرعامل بورس کالای ایران با اصحاب رسانه،
              ۲۱ بهمن‌ماه ۱۴۰۳ برگزار شد که سید جواد جهرمی ضمن اعلام عملکرد و
              دستاوردهای بورس کالای ایران در سال ۱۴۰۳، برنامه های سال آتی این
              بورس را تشریح کرد.
            </div>
          </div>
          <div className="w-full h-80 overflow-hidden">
            {" "}
            {/* تغییر ارتفاع تصویر */}
            <Image
              src="/images/jahromi.jpeg"
              alt="section"
              width={512}
              height={512}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
