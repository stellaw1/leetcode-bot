<template>
    <div class="p-5 card md:hero mx-auto overflow-auto">
        <form class="form-control">
            <ul class="w-auto">
                <li>
                    <label class="input-group mb-2">
                        <span class="w-28">Number</span>
                        <input type="number" placeholder="1" class="input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Title</span>
                        <input type="text" placeholder="Two Sum" class="input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Difficulty</span>
                        <select class="select select-bordered">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Description</span>
                        <textarea type="text" placeholder="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target." class="textarea  textarea-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Solution</span>
                        <textarea type="text" placeholder="python code" class="textarea textarea-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28 pt-2 pb-2">Time Compelexity</span>
                        <input type="text" placeholder="O(n)" class="h-24 input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28 pt-2 pb">Space Complexity</span>
                        <input type="text" placeholder="O(n)" class="h-24 input input-bordered " />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Notes</span>
                        <textarea type="text" placeholder="- note to self" class="textarea  textarea-bordered" />
                    </label>
                </li>
                <li>
                    <button class="btn btn-wide btn-primary" type="submit">
                        Submit
                    </button>
                </li>
            </ul>
        </form>
    </div>
<!-- 
    <div className="md:hero mx-auto h-auto">
        <div class="form-control bg-gray-100 p-5">
            <label class="label">
                <span class="label-text">LeetCode problem</span>
            </label>
            <ul>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Number</span>
                        <input type="number" placeholder="1" class="input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Title</span>
                        <input type="text" placeholder="Two Sum" class="input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Difficulty</span>
                        <select class="select">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Description</span>
                        <textarea type="text" placeholder="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target." class="textarea  textarea-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Solution</span>
                        <textarea type="text" placeholder="python code" class="textarea textarea-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28 p-2">Time Compelexity</span>
                        <input type="text" placeholder="O(n)" class="h-24 input input-bordered" />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28 p-2">Space Complexity</span>
                        <input type="text" placeholder="O(n)" class="h-24 input input-bordered " />
                    </label>
                </li>
                <li>
                    <label class="input-group mb-4">
                        <span class="w-28">Notes</span>
                        <textarea type="text" placeholder="- note to self" class="textarea  textarea-bordered" />
                    </label>
                </li>
            </ul>
        </div>
    </div> -->
</template>