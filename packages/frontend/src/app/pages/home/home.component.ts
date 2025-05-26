import { Component } from '@angular/core'
import { SkillItemComponent, type Skill } from '../../components/skill-item/skill-item.component'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillItemComponent,NgIcon],
  template: `
    <!-- プロフィールヒーローセクション -->
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- 背景グラデーション -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      <!-- 装飾的な要素 -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- プロフィール情報 -->
          <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Hello World!!
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-12"></div>
          </div>
          
          <!-- プロフィール詳細 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <!-- プロフィール画像 -->
              <div class="flex-shrink-0">
                <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/icon.JPG"
                    alt="プロフィール画像"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <!-- プロフィール内容 -->
              <div class="flex-1 text-center md:text-left">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  フロントエンドエンジニア
                </h2>
                <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                  Angularをメインに開発をしています!
                </p>
                <div class="flex flex-wrap justify-center md:justify-start gap-3">
                  <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    フロントエンド開発
                  </span>
                  <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    モダン技術
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- スクロールインジケーター -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-smooth-bounce" style="transform: translateZ(0);">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-smooth-pulse"></div>
        </div>
      </div>
    </div>

    <!-- スキルセクション -->
    <div class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-600 bg-clip-text text-transparent">
              スキル
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <!-- フロントエンド技術 -->
          <div class="mb-20">
            <div class="flex items-center justify-center mb-12">
              <div class="flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg border border-blue-100/50">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                  <ng-icon name="tablerStackFront" size="20" color="white"></ng-icon>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900">フロントエンド技術</h3>
              </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (skill of frontendSkills; track skill.name) {
                <app-skill-item [skill]="skill" />
              }
            </div>
          </div>

          <!-- バックエンド技術 -->
          <div class="mb-20">
            <div class="flex items-center justify-center mb-12">
              <div class="flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg border border-green-100/50">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                  <ng-icon name="tablerBackground" size="20" color="white"></ng-icon>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900">バックエンド技術</h3>
              </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (skill of backendSkills; track skill.name) {
                <app-skill-item [skill]="skill" />
              }
            </div>
          </div>

          <!-- その他のスキル -->
          <div class="mb-20">
            <div class="flex items-center justify-center mb-12">
              <div class="flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg border border-purple-100/50">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900">開発ツール & その他</h3>
              </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (skill of otherSkills; track skill.name) {
                <app-skill-item [skill]="skill" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  frontendSkills: Skill[] = [
    { name: 'HTML/CSS', icon: 'tablerFileCode', category: 'マークアップ' },
    { name: 'JavaScript', icon: 'tablerBrandJavascript', category: 'プログラミング言語' },
    { name: 'TypeScript', icon: 'tablerBrandTypescript', category: 'プログラミング言語' },
    { name: 'Angular', icon: 'tablerBrandAngular', category: 'フレームワーク' },
    { name: 'Nextjs', icon: 'tablerBrandNextjs', category: 'ライブラリ' },
    { name: 'Tailwind CSS', icon: 'tablerBrandTailwind', category: 'CSSフレームワーク' },
  ]

  backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'tablerBrandNodejs', category: 'ランタイム環境' },
    { name: 'Hono', icon: 'tablerCampfire', category: 'フレームワーク' },
  ]

  otherSkills: Skill[] = [
    { name: 'Git', icon: 'tablerBrandGit', category: 'バージョン管理' },
    { name: 'CI/CD', icon: 'tablerGitBranch', category: '自動化' },
    { name: 'Jest', icon: 'tablerTestPipe', category: 'テスト' },
    { name: 'Playwright', icon: 'tablerBug', category: 'E2Eテスト' },
    { name: 'Figma', icon: 'tablerBrandFigma', category: 'デザインツール' },
  ]
}
