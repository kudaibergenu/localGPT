export default {
	"model_list": [
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
			"local_id": "[Light and Fast] AI Mode",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 899.11,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
			"local_id": "[Smart and Heavy] AI Mode",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
	],
	"use_web_worker": true
}
