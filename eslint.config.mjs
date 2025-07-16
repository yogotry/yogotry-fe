import boundaries from 'eslint-plugin-boundaries'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImport from 'eslint-plugin-unused-imports'
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { 'simple-import-sort': simpleImportSort, 'unused-imports': unusedImport, boundaries: boundaries, },

    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**/*' },
        { type: 'widgets', pattern: 'src/widgets/**/*' },
        { type: 'features', pattern: 'src/features/**/*' },
        { type: 'entities', pattern: 'src/entities/**/*' },
        { type: 'shared', pattern: 'src/shared/**/*' },
      ],
    },

    rules: {
      // simpleImportSort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:', '^\\w'], // node 내장, 외부 패키지
            ['^react', '^@?\\w'], // 외부 라이브러리
            ['^@/'],  // 프로젝트 내부 alias import
            ['^\\u0000', '^\\.\\.(?!/?$)', '^\\.'], // 상대경로
          ],
        },
      ],
      'simple-import-sort/exports': 'off',

      // unusedImport
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'app', allow: ['app', 'widgets', 'features', 'entities', 'shared'] },
            { from: 'widgets', allow: ['widgets', 'features', 'entities', 'shared'] },
            { from: 'features', allow: ['features', 'entities', 'shared'] },
            { from: 'entities', allow: ['entities', 'shared'] },
            { from: 'shared', allow: ['shared'] },
          ],
        },
      ],

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      '@typescript-eslint/no-explicit-any': 'error', // any 금지
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 생략 허용
    },
  }
];

export default eslintConfig;
