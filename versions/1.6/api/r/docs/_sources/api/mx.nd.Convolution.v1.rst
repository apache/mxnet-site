

``mx.nd.Convolution.v1``
================================================

Description
----------------------

This operator is DEPRECATED. Apply convolution to input then add a bias.


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to the ConvolutionV1Op.                         |
+----------------------------------------+------------------------------------------------------------+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weight matrix.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``bias``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Bias parameter.                                            |
+----------------------------------------+------------------------------------------------------------+
| ``kernel``                             | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | convolution kernel size: (h, w) or (d, h, w)               |
+----------------------------------------+------------------------------------------------------------+
| ``stride``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | convolution stride: (h, w) or (d, h, w)                    |
+----------------------------------------+------------------------------------------------------------+
| ``dilate``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | convolution dilate: (h, w) or (d, h, w)                    |
+----------------------------------------+------------------------------------------------------------+
| ``pad``                                | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | pad for convolution: (h, w) or (d, h, w)                   |
+----------------------------------------+------------------------------------------------------------+
| ``num.filter``                         | int (non-negative), required.                              |
|                                        |                                                            |
|                                        | convolution filter(channel) number                         |
+----------------------------------------+------------------------------------------------------------+
| ``num.group``                          | int (non-negative), optional, default=1.                   |
|                                        |                                                            |
|                                        | Number of group partitions. Equivalent to slicing input    |
|                                        | into                                                       |
|                                        | num_group                                                  |
|                                        | partitions, apply convolution on each, then concatenate    |
|                                        | the                                                        |
|                                        | results                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``workspace``                          | long (non-negative), optional, default=1024.               |
|                                        |                                                            |
|                                        | Maximum temporary workspace allowed for convolution        |
|                                        | (MB).This parameter determines the effective batch size of |
|                                        | the convolution kernel, which may be smaller than the      |
|                                        | given batch size. Also, the workspace will be              |
|                                        | automatically enlarged to make sure that we can run the    |
|                                        | kernel with                                                |
|                                        | batch_size=1                                               |
+----------------------------------------+------------------------------------------------------------+
| ``no.bias``                            | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Whether to disable bias parameter.                         |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.tune``                         | {None, 'fastest', 'limited_workspace', 'off'},optional,    |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Whether to pick convolution algo by running performance    |
|                                        | test.                                                      |
|                                        | Leads to higher startup time but may give faster speed.    |
|                                        | Options                                                    |
|                                        | are:                                                       |
|                                        | 'off': no tuning                                           |
|                                        | 'limited_workspace': run test and pick the fastest         |
|                                        | algorithm that doesn't exceed workspace                    |
|                                        | limit.                                                     |
|                                        | 'fastest': pick the fastest algorithm and ignore workspace |
|                                        | limit.                                                     |
|                                        | If set to None (default), behavior is determined by        |
|                                        | environment                                                |
|                                        | variable MXNET_CUDNN_AUTOTUNE_DEFAULT: 0 for off,          |
|                                        | 1 for limited workspace (default), 2 for fastest.          |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.off``                          | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Turn off cudnn for this layer.                             |
+----------------------------------------+------------------------------------------------------------+
| ``layout``                             | {None, 'NCDHW', 'NCHW', 'NDHWC', 'NHWC'},optional,         |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Set layout for input, output and weight. Empty for         |
|                                        | default layout: NCHW for 2d and NCDHW for 3d.              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


