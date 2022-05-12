<template>
    <div class="p-2 card md:hero mx-auto overflow-auto">
        <div class="w-4/6">
            <div class="md:hero mx-auto mb-8">
                <h1>Enter new problem: </h1>
            </div>
            <div class="flex mb-4 w-full">
                <label class="input-group mr-2 w-2/5">
                    <span class="w-2/5">Number</span>
                    <input type="number" placeholder="1" class="input input-bordered flex-none w-3/5 ..." />
                </label>
                <label class="input-group w-3/5">
                    <span class="w-1/5">Title</span>
                    <input type="text" placeholder="Two Sum" class="input input-bordered flex-initial w-4/5 ..." />
                </label>
            </div>
            <div class="mb-4 w-full">
                <label class="input-group">
                    <span class="w-1/6">Description</span>
                    <textarea type="text" placeholder="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target." class="textarea textarea-bordered w-5/6 ..." />
                </label>
            </div>
            <div class="mb-4 w-full">
                <label class="input-group">
                    <span class="w-1/6">Solution</span>
                    <textarea type="text" class="textarea textarea-bordered w-5/6 ..." />
                </label>
            </div>
            <div class="flex mb-4 w-full">
                <label class="input-group mr-2 w-1/3">
                    <span class="w-2/5">Difficulty</span>
                    <select class="select select-bordered flex-initial w-3/5 ...">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </label>
                <label class="input-group mr-2 w-1/3">
                    <span class="w-4/6">Time Complexity</span>
                    <input type="text" placeholder="O(n)" class="input input-bordered flex-none w-2/6 ..." />
                </label>
                <label class="input-group w-1/3">
                    <span class="w-4/6">Space Complexity</span>
                    <input type="text" placeholder="O(1)" class="input input-bordered flex-initial w-2/6 ..." />
                </label>
            </div>
            <div class="mb-4 w-full">
                <label class="input-group">
                    <span class="w-1/6">Notes</span>
                    <textarea type="text" placeholder="- note to self" class="textarea textarea-bordered w-5/6 ..." />
                </label>
            </div>
            <div class="md:hero mx-auto mt-12">
                <button class="btn btn-wide btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>