import React from 'react'

const Prompt = () => {
    return (
        <div x-data class="flex w-full flex-col overflow-hidden border-outline bg-surface-alt text-on-surface has-[p:focus]:outline-2 has-[p:focus]:outline-offset-2 has-[p:focus]:outline-primary dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:has-[p:focus]:outline-primary-dark rounded-radius border">
        <div class="p-2">
            <p id="promptLabel" class="pb-1 pl-2 text-sm font-bold text-on-surface opacity-60 dark:text-on-surface-dark">Prompt</p>
            <p class="scroll-on max-h-44 w-full overflow-y-auto px-2 py-1 focus:outline-hidden" role="textbox" aria-labelledby="promptLabel" x-on:paste="document.execCommand('insertText', false, $event.clipboardData.getData('text/plain'))" x-ref="promptTextInput" contenteditable/>
            <textarea name="promptText" x-ref="promptText" hidden></textarea>
        </div>
        <div class="flex w-full items-center px-2.5 py-2">
            <button type="button" class="ml-auto flex items-center gap-2 whitespace-nowrap bg-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-on-primary transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark rounded-radius" x-on:click="$refs.promptText.value = $refs.promptTextInput.innerText">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z" clip-rule="evenodd"/>
                </svg>
                Generate
            </button>
        </div>
    </div>
      );
}

export default Prompt
