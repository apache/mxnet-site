.. raw:: html



``mx.nd.UpSampling``
========================================

Description
----------------------

Performs nearest neighbor/bilinear up sampling to inputs.


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Array of tensors to upsample                               |
+----------------------------------------+------------------------------------------------------------+
| ``scale``                              | int, required.                                             |
|                                        |                                                            |
|                                        | Up sampling scale                                          |
+----------------------------------------+------------------------------------------------------------+
| ``num.filter``                         | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Input filter. Only used by bilinear sample_type.           |
+----------------------------------------+------------------------------------------------------------+
| ``sample.type``                        | {'bilinear', 'nearest'}, required.                         |
|                                        |                                                            |
|                                        | upsampling method                                          |
+----------------------------------------+------------------------------------------------------------+
| ``multi.input.mode``                   | {'concat', 'sum'},optional, default='concat'.              |
|                                        |                                                            |
|                                        | How to handle multiple input. concat means concatenate     |
|                                        | upsampled images along the channel dimension. sum means    |
|                                        | add all images together, only available for nearest        |
|                                        | neighbor                                                   |
|                                        | upsampling.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``num.args``                           | int, required.                                             |
|                                        |                                                            |
|                                        | Number of inputs to be upsampled. For nearest neighbor     |
|                                        | upsampling, this can be 1-N; the size of output will       |
|                                        | be(scale*h_0,scale*w_0) and all other inputs will be       |
|                                        | upsampled to thesame size. For bilinear upsampling this    |
|                                        | must be 2; 1 input and 1                                   |
|                                        | weight.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``workspace``                          | long (non-negative), optional, default=512.                |
|                                        |                                                            |
|                                        | Tmp workspace for deconvolution (MB)                       |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray



.. disqus::
   :disqus_identifier: mx.nd.UpSampling
