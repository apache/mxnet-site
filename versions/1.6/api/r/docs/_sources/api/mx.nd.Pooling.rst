

``mx.nd.Pooling``
==================================

Description
----------------------

Performs pooling on the input.

The shapes for 1-D pooling are

- **data** and **out**: *(batch_size, channel, width)* (NCW layout) or
  *(batch_size, width, channel)* (NWC layout),

The shapes for 2-D pooling are

- **data** and **out**: *(batch_size, channel, height, width)* (NCHW layout) or
  *(batch_size, height, width, channel)* (NHWC layout),

    out_height = f(height, kernel[0], pad[0], stride[0])
    out_width = f(width, kernel[1], pad[1], stride[1])

The definition of *f* depends on ``pooling_convention``, which has two options:

- **valid** (default)::

	 f(x, k, p, s) = floor((x+2*p-k)/s)+1
	 
- **full**, which is compatible with Caffe::

	 f(x, k, p, s) = ceil((x+2*p-k)/s)+1
	 
	 When ``global_pool`` is set to be true, then global pooling is performed. It will reset
	 ``kernel=(height, width)`` and set the appropiate padding to 0.
	 
	 Three pooling options are supported by ``pool_type``:
	 
	 - **avg**: average pooling
	 - **max**: max pooling
	 - **sum**: sum pooling
	 - **lp**: Lp pooling
	 
	 For 3-D pooling, an additional *depth* dimension is added before
	 *height*. Namely the input data and output will have shape *(batch_size, channel, depth,
	 height, width)* (NCDHW layout) or *(batch_size, depth, height, width, channel)* (NDHWC layout).
	 
	 Notes on Lp pooling:
	 
	 Lp pooling was first introduced by this paper: https://arxiv.org/pdf/1204.3968.pdf.
	 L-1 pooling is simply sum pooling, while L-inf pooling is simply max pooling.
	 We can see that Lp pooling stands between those two, in practice the most common value for p is 2.
	 
	 For each window ``X``, the mathematical expression for Lp pooling is:
	 
	 :math:`f(X) = \sqrt[p]{\sum_{x}^{X} x^p}`
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to the pooling operator.                        |
+----------------------------------------+------------------------------------------------------------+
| ``kernel``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Pooling kernel size: (y, x) or (d, y, x)                   |
+----------------------------------------+------------------------------------------------------------+
| ``pool.type``                          | {'avg', 'lp', 'max', 'sum'},optional, default='max'.       |
|                                        |                                                            |
|                                        | Pooling type to be applied.                                |
+----------------------------------------+------------------------------------------------------------+
| ``global.pool``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Ignore kernel size, do global pooling based on current     |
|                                        | input feature                                              |
|                                        | map.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.off``                          | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Turn off cudnn pooling and use MXNet pooling operator.     |
+----------------------------------------+------------------------------------------------------------+
| ``pooling.convention``                 | {'full', 'same', 'valid'},optional, default='valid'.       |
|                                        |                                                            |
|                                        | Pooling convention to be applied.                          |
+----------------------------------------+------------------------------------------------------------+
| ``stride``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Stride: for pooling (y, x) or (d, y, x). Defaults to 1 for |
|                                        | each                                                       |
|                                        | dimension.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``pad``                                | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Pad for pooling: (y, x) or (d, y, x). Defaults to no       |
|                                        | padding.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``p.value``                            | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Value of p for Lp pooling, can be 1 or 2, required for Lp  |
|                                        | Pooling.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``count.include.pad``                  | boolean or None, optional, default=None.                   |
|                                        |                                                            |
|                                        | Only used for AvgPool, specify whether to count padding    |
|                                        | elements for averagecalculation. For example, with a 5*5   |
|                                        | kernel on a 3*3 corner of a image,the sum of the 9 valid   |
|                                        | elements will be divided by 25 if this is set to true,or   |
|                                        | it will be divided by 9 if this is set to false. Defaults  |
|                                        | to                                                         |
|                                        | true.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``layout``                             | {None, 'NCDHW', 'NCHW', 'NCW', 'NDHWC', 'NHWC',            |
|                                        | 'NWC'},optional,                                           |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Set layout for input and output. Empty for                 |
|                                        | default layout: NCW for 1d, NCHW for 2d and NCDHW for 3d.  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/pooling.cc#L414

