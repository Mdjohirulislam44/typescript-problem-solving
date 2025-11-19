What are some differences between interfaces and types in TypeScript?

TypeScript-এ Interfaces এবং Types (টাইপ অ্যালিয়াস) এর মধ্যে অনেক মিল থাকলেও, তাদের ব্যবহারের ক্ষেত্রে এবং কিছু বিশেষ ক্ষমতায় পার্থক্য রয়েছে
ইন্টারফেসের বিশেষত্ব: Declaration Merging
যখন  কোনো থার্ড-পার্টি লাইব্রেরির মধ্যে বিদ্যমান একটি ইন্টারফেসে নতুন প্রোপার্টি যোগ করতে চান, তখন Interface ব্যবহার করা অত্যাবশ্যক। এটিই ইন্টারফেসের সবচেয়ে শক্তিশালী দিক।
যখন আপনি ক্লাস তৈরি করছেন এবং ক্লাসের কাঠামো সংজ্ঞায়িত করতে চান তখন থেকে ্ interface ব্যাবহার হয়।
টাইপ অ্যালিয়াসের বিশেষত্ব: নতুন নাম দেওয়া (Aliasing) এবং ইউনিয়ন টাইপ
Type Alias ব্যবহার করে আপনি Primitive, Union বা Intersection টাইপগুলোকে একটি পরিষ্কার নাম দিতে পারেন।

What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript-এ keyof keyword ব্যবহার করা হয় কোনো object type-এর property keys কে type হিসেবে বের করার জন্য। এটি type-safe প্রোগ্রামিং-এর জন্য খুবই গুরুত্বপূর্ণ।

ব্যবহার ও সুবিধা

keyof কোন object type-এর সব key কে union type হিসেবে দেয়।

এর মাধ্যমে আপনি function বা variable-এ শুধুমাত্র সেই object-এর বৈধ key ব্যবহার করতে পারবেন।

এতে compile-time এ error পাওয়া যায় যদি ভুল key ব্যবহার করা হয়।