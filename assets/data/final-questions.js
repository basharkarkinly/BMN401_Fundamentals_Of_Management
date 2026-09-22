/* دمج كل بنوك الأسئلة (كل الفصول ما عدا الرابع/أجايل) ببنك واحد للفحص النهائي الشامل.
   يعتمد هذا الملف على أن كل ملفات ch1..ch10-questions.js محمّلة قبله بصفحة final-exam.html */
const FINAL_POOL = [
  ...CH1_POOL, ...CH2_POOL, ...CH3_POOL,
  ...CH5_POOL, ...CH6_POOL, ...CH7_POOL,
  ...CH8_POOL, ...CH9_POOL, ...CH10_POOL,
];
