import { Component, signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center h-16">
          <!-- ロゴ -->
          <a routerLink="/" class="flex items-center space-x-2 group">
            <span class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              MZK.MNK.DEV
            </span>
          </a>
          
          <!-- デスクトップナビゲーション -->
          <nav class="hidden md:flex items-center space-x-8">
            <a
              routerLink="/"
              routerLinkActive="text-blue-600 font-semibold"
              [routerLinkActiveOptions]="{exact: true}"
              class="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              ホーム
              <span class="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>
          
          <!-- モバイルメニューボタン -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            [attr.aria-expanded]="isMobileMenuOpen()"
            aria-label="メニューを開く"
          >
            <svg
              class="w-6 h-6 text-gray-700 transition-transform duration-300"
              [class.rotate-90]="isMobileMenuOpen()"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                [attr.d]="isMobileMenuOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              ></path>
            </svg>
          </button>
        </div>
        
        <!-- モバイルメニュー -->
        <div
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMobileMenuOpen()"
          [class.max-h-96]="isMobileMenuOpen()"
          [class.opacity-0]="!isMobileMenuOpen()"
          [class.opacity-100]="isMobileMenuOpen()"
        >
          <nav class="py-4 space-y-2">
            <a
              routerLink="/"
              routerLinkActive="bg-blue-50 text-blue-600 font-semibold"
              [routerLinkActiveOptions]="{exact: true}"
              (click)="closeMobileMenu()"
              class="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-300"
            >
              ホーム
            </a>
          </nav>
        </div>
      </div>
    </header>
    
    <!-- ヘッダーの高さ分のスペーサー -->
    <div class="h-16"></div>
  `,
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false)
  
  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value)
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen.set(false)
  }
}
